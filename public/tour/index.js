/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

(function() {
  // Add Back to Home button
  function addBackToHomeButton() {
    // Removed dynamic button creation as button is now in index.html
  }

  addBackToHomeButton();

  // Add event listener for Back to Home button in title bar
  document.addEventListener('DOMContentLoaded', function() {
    var backToHomeButton = document.getElementById('backToHomeButton');
    if (backToHomeButton) {
      backToHomeButton.addEventListener('click', function() {
        window.top.location.href = '/';
      });
    }
  });

  // View Direction Control Panel logic (after viewer/scenes are ready)
  setTimeout(function() {
    var panel = document.getElementById('viewControlPanel');
    if (panel && window.viewer) {
      var buttons = panel.querySelectorAll('.view-btn');
      buttons.forEach(function(btn) {
        btn.addEventListener('click', function() {
          var deg = parseInt(btn.getAttribute('data-deg'), 10);
          var rad = deg * Math.PI / 180;
          var currentScene = window.viewer.scene();
          if (currentScene && currentScene.view) {
            var params = currentScene.view.parameters();
            // Animate autorotate to target yaw
            var startYaw = params.yaw;
            var targetYaw = rad;
            var duration = 1200; // ms
            var startTime = null;
            function animateYaw(ts) {
              if (!startTime) startTime = ts;
              var progress = Math.min((ts - startTime) / duration, 1);
              var newYaw = startYaw + (targetYaw - startYaw) * progress;
              currentScene.view.setParameters({
                yaw: newYaw,
                pitch: params.pitch,
                fov: params.fov
              });
              if (progress < 1) {
                requestAnimationFrame(animateYaw);
              }
            }
            requestAnimationFrame(animateYaw);
          }
        });
      });
    }
  }, 500);

  var Marzipano = window.Marzipano;
  var bowser = window.bowser;
  var screenfull = window.screenfull;
  var data = window.APP_DATA;

  // Grab elements from DOM.
  var panoElement = document.querySelector('#pano');
  var sceneNameElement = document.querySelector('#titleBar .sceneName');
  var sceneListElement = document.querySelector('#sceneList');
  var sceneElements = document.querySelectorAll('#sceneList .scene');
  var sceneListToggleElement = document.querySelector('#sceneListToggle');
  var autorotateToggleElement = document.querySelector('#autorotateToggle');
  var fullscreenToggleElement = document.querySelector('#fullscreenToggle');

  // Detect desktop or mobile mode.
  if (window.matchMedia) {
    var setMode = function() {
      if (mql.matches) {
        document.body.classList.remove('desktop');
        document.body.classList.add('mobile');
      } else {
        document.body.classList.remove('mobile');
        document.body.classList.add('desktop');
      }
    };
    var mql = matchMedia("(max-width: 500px), (max-height: 500px)");
    setMode();
    mql.addListener(setMode);
  } else {
    document.body.classList.add('desktop');
  }

  // Detect whether we are on a touch device.
  document.body.classList.add('no-touch');
  window.addEventListener('touchstart', function() {
    document.body.classList.remove('no-touch');
    document.body.classList.add('touch');
  });

  // Use tooltip fallback mode on IE < 11.
  if (bowser.msie && parseFloat(bowser.version) < 11) {
    document.body.classList.add('tooltip-fallback');
  }

  // Viewer options.
  var viewerOpts = {
    controls: {
      mouseViewMode: data.settings.mouseViewMode
    }
  };

  // Initialize viewer.
  var viewer = new Marzipano.Viewer(panoElement, viewerOpts);
  window.viewer = viewer;

  // ADD THIS: Rotation control functions for Front, Right, Back, Left buttons
  window.moveRelative = function(direction) {
    var currentScene = viewer.scene();
    if (!currentScene) return;
    
    var view = currentScene.view();
    if (!view) return;
    
    var params = view.parameters();
    var targetYaw;
    
    switch(direction) {
      case 'front':
        targetYaw = 0;
        break;
      case 'right':
        targetYaw = Math.PI / 2; // 90 degrees
        break;
      case 'back':
        targetYaw = Math.PI; // 180 degrees
        break;
      case 'left':
        targetYaw = -Math.PI / 2; // -90 degrees (or 270)
        break;
      default:
        return;
    }
    
    // Animate rotation
    var startYaw = params.yaw;
    var duration = 1200; // milliseconds
    var startTime = null;
    
    function animateYaw(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Smooth easing
      var easeProgress = progress * progress * (3 - 2 * progress);
      
      var newYaw = startYaw + (targetYaw - startYaw) * easeProgress;
      view.setParameters({
        yaw: newYaw,
        pitch: params.pitch,
        fov: params.fov
      });
      
      if (progress < 1) {
        requestAnimationFrame(animateYaw);
      }
    }
    
    requestAnimationFrame(animateYaw);
  };

  // Create scenes.
  var scenes = data.scenes.map(function(data) {
    var urlPrefix = "tiles";
    var source = Marzipano.ImageUrlSource.fromString(
      urlPrefix + "/" + data.id + "/{z}/{f}/{y}/{x}.jpg",
      { cubeMapPreviewUrl: urlPrefix + "/" + data.id + "/preview.jpg" });
    var geometry = new Marzipano.CubeGeometry(data.levels);

    var limiter = Marzipano.RectilinearView.limit.traditional(data.faceSize, 100*Math.PI/180, 120*Math.PI/180);
    var view = new Marzipano.RectilinearView(data.initialViewParameters, limiter);

    var scene = viewer.createScene({
      source: source,
      geometry: geometry,
      view: view,
      pinFirstLevel: true
    });

    // Create link hotspots.
    data.linkHotspots.forEach(function(hotspot) {
      var element = createLinkHotspotElement(hotspot);
      scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch });
    });

    // Create info hotspots.
    data.infoHotspots.forEach(function(hotspot) {
      var element = createInfoHotspotElement(hotspot);
      scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch });
    });

    return {
      data: data,
      scene: scene,
      view: view
    };
  });

  // Set up autorotate, if enabled.
  var autorotate = Marzipano.autorotate({
    yawSpeed: 0.03,
    targetPitch: 0,
    targetFov: Math.PI/2
  });
  if (data.settings.autorotateEnabled) {
    autorotateToggleElement.classList.add('enabled');
  }

  // Set handler for autorotate toggle.
  autorotateToggleElement.addEventListener('click', toggleAutorotate);

  // Set up fullscreen mode, if supported.
  if (screenfull.enabled && data.settings.fullscreenButton) {
    document.body.classList.add('fullscreen-enabled');
    fullscreenToggleElement.addEventListener('click', function() {
      screenfull.toggle();
    });
    screenfull.on('change', function() {
      if (screenfull.isFullscreen) {
        fullscreenToggleElement.classList.add('enabled');
      } else {
        fullscreenToggleElement.classList.remove('enabled');
      }
    });
  } else {
    document.body.classList.add('fullscreen-disabled');
  }

  // Set handler for scene list toggle.
  sceneListToggleElement.addEventListener('click', toggleSceneList);

  // Start with the scene list open on desktop.
  if (!document.body.classList.contains('mobile')) {
    showSceneList();
  }

  // Set handler for scene switch.
  scenes.forEach(function(scene) {
    var el = document.querySelector('#sceneList .scene[data-id="' + scene.data.id + '"]');
    el.addEventListener('click', function() {
      switchScene(scene);
      // On mobile, hide scene list after selecting a scene.
      if (document.body.classList.contains('mobile')) {
        hideSceneList();
      }
    });
  });

  // DOM elements for view controls.
  var viewUpElement = document.querySelector('#viewUp');
  var viewDownElement = document.querySelector('#viewDown');
  var viewLeftElement = document.querySelector('#viewLeft');
  var viewRightElement = document.querySelector('#viewRight');
  var viewInElement = document.querySelector('#viewIn');
  var viewOutElement = document.querySelector('#viewOut');

  // Dynamic parameters for controls.
  var velocity = 0.7;
  var friction = 3;

  // Associate view controls with elements.
  var controls = viewer.controls();
  controls.registerMethod('upElement',    new Marzipano.ElementPressControlMethod(viewUpElement,     'y', -velocity, friction), true);
  controls.registerMethod('downElement',  new Marzipano.ElementPressControlMethod(viewDownElement,   'y',  velocity, friction), true);
  controls.registerMethod('leftElement',  new Marzipano.ElementPressControlMethod(viewLeftElement,   'x', -velocity, friction), true);
  controls.registerMethod('rightElement', new Marzipano.ElementPressControlMethod(viewRightElement,  'x',  velocity, friction), true);
  controls.registerMethod('inElement',    new Marzipano.ElementPressControlMethod(viewInElement,  'zoom', -velocity, friction), true);
  controls.registerMethod('outElement',   new Marzipano.ElementPressControlMethod(viewOutElement, 'zoom',  velocity, friction), true);

  function sanitize(s) {
    return s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;');
  }

  function switchScene(scene) {
    stopAutorotate();
    
    // Check if URL parameters exist and apply custom view
    const urlParams = getUrlParams();
    let viewParameters = scene.data.initialViewParameters;
    
    if (urlParams.scene === scene.data.id && urlParams.yaw !== null && urlParams.pitch !== null) {
      viewParameters = {
        pitch: urlParams.pitch,
        yaw: urlParams.yaw,
        fov: urlParams.fov !== null ? urlParams.fov : scene.data.initialViewParameters.fov
      };
    }
    
    scene.view.setParameters(viewParameters);
    scene.scene.switchTo();
    startAutorotate();
    updateSceneName(scene);
    updateSceneList(scene);
    
      // Re-attach direction button listeners for the new active scene
      var panel = document.getElementById('viewControlPanel');
      if (panel) {
        var buttons = panel.querySelectorAll('.view-btn');
        buttons.forEach(function(btn) {
          btn.onclick = function() {
            var deg = parseInt(btn.getAttribute('data-deg'), 10);
            var rad = deg * Math.PI / 180;
            var params = scene.view.parameters();
            // Animate yaw
            var startYaw = params.yaw;
            var targetYaw = rad;
            var duration = 1200;
            var startTime = null;
            function animateYaw(ts) {
              if (!startTime) startTime = ts;
              var progress = Math.min((ts - startTime) / duration, 1);
              var newYaw = startYaw + (targetYaw - startYaw) * progress;
              scene.view.setParameters({
                yaw: newYaw,
                pitch: params.pitch,
                fov: params.fov
              });
              if (progress < 1) {
                requestAnimationFrame(animateYaw);
              }
            }
            requestAnimationFrame(animateYaw);
          };
        });
      }
  }

  function updateSceneName(scene) {
    sceneNameElement.innerHTML = sanitize(scene.data.name);
  }

  function updateSceneList(scene) {
    for (var i = 0; i < sceneElements.length; i++) {
      var el = sceneElements[i];
      if (el.getAttribute('data-id') === scene.data.id) {
        el.classList.add('current');
      } else {
        el.classList.remove('current');
      }
    }
  }

  function showSceneList() {
    sceneListElement.classList.add('enabled');
    sceneListToggleElement.classList.add('enabled');
  }

  function hideSceneList() {
    sceneListElement.classList.remove('enabled');
    sceneListToggleElement.classList.remove('enabled');
  }

  function toggleSceneList() {
    sceneListElement.classList.toggle('enabled');
    sceneListToggleElement.classList.toggle('enabled');
  }

  function startAutorotate() {
    if (!autorotateToggleElement.classList.contains('enabled')) {
      return;
    }
    viewer.startMovement(autorotate);
    viewer.setIdleMovement(3000, autorotate);
  }

  function stopAutorotate() {
    viewer.stopMovement();
    viewer.setIdleMovement(Infinity);
  }

  function toggleAutorotate() {
    if (autorotateToggleElement.classList.contains('enabled')) {
      autorotateToggleElement.classList.remove('enabled');
      stopAutorotate();
    } else {
      autorotateToggleElement.classList.add('enabled');
      startAutorotate();
    }
  }

  function createLinkHotspotElement(hotspot) {

    // Create wrapper element to hold icon and tooltip.
    var wrapper = document.createElement('div');
    wrapper.classList.add('hotspot');
    wrapper.classList.add('link-hotspot');

    // Create image element.
    var icon = document.createElement('img');
    icon.src = 'img/link.png';
    icon.classList.add('link-hotspot-icon');

    // Set rotation transform.
    var transformProperties = [ '-ms-transform', '-webkit-transform', 'transform' ];
    for (var i = 0; i < transformProperties.length; i++) {
      var property = transformProperties[i];
      icon.style[property] = 'rotate(' + hotspot.rotation + 'rad)';
    }

    // Add click event handler.
    wrapper.addEventListener('click', function() {
      switchScene(findSceneById(hotspot.target));
    });

    // Prevent touch and scroll events from reaching the parent element.
    // This prevents the view control logic from interfering with the hotspot.
    stopTouchAndScrollEventPropagation(wrapper);

    // Create tooltip element.
    var tooltip = document.createElement('div');
    tooltip.classList.add('hotspot-tooltip');
    tooltip.classList.add('link-hotspot-tooltip');
    tooltip.innerHTML = findSceneDataById(hotspot.target).name;

    wrapper.appendChild(icon);
    wrapper.appendChild(tooltip);

    return wrapper;
  }

  function createInfoHotspotElement(hotspot) {

    // Create wrapper element to hold icon and tooltip.
    var wrapper = document.createElement('div');
    wrapper.classList.add('hotspot');
    wrapper.classList.add('info-hotspot');

    // Create hotspot/tooltip header.
    var header = document.createElement('div');
    header.classList.add('info-hotspot-header');

    // Create image element.
    var iconWrapper = document.createElement('div');
    iconWrapper.classList.add('info-hotspot-icon-wrapper');
    var icon = document.createElement('img');
    icon.src = 'img/info.png';
    icon.classList.add('info-hotspot-icon');
    iconWrapper.appendChild(icon);

    // Create title element.
    var titleWrapper = document.createElement('div');
    titleWrapper.classList.add('info-hotspot-title-wrapper');
    var title = document.createElement('div');
    title.classList.add('info-hotspot-title');
    title.innerHTML = hotspot.title;
    titleWrapper.appendChild(title);

    /*================================================================*/

    // Create share element (only for specific hotspots)
    var shareWrapper = document.createElement('div');
    shareWrapper.classList.add('info-hotspot-share-wrapper');
    var shareIcon = document.createElement('img');
    shareIcon.src = 'img/share.png';
    shareIcon.classList.add('info-hotspot-share-icon');
    shareIcon.title = 'Share this view';
    shareWrapper.appendChild(shareIcon);

    /*================================================================*/


    // Create close element.
    var closeWrapper = document.createElement('div');
    closeWrapper.classList.add('info-hotspot-close-wrapper');
    var closeIcon = document.createElement('img');
    closeIcon.src = 'img/close.png';
    closeIcon.classList.add('info-hotspot-close-icon');
    closeWrapper.appendChild(closeIcon);

    // Construct header element.
    header.appendChild(iconWrapper);
    header.appendChild(titleWrapper);
    header.appendChild(shareWrapper); // add this on
    header.appendChild(closeWrapper);

    // Create text element.
    var text = document.createElement('div');
    text.classList.add('info-hotspot-text');
    text.innerHTML = hotspot.text;

    // Place header and text into wrapper element.
    wrapper.appendChild(header);
    wrapper.appendChild(text);

    // Create a full-screen modal wrapper
    var modal = document.createElement('div');
    modal.classList.add('info-hotspot-modal');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100vw';
    modal.style.height = '100vh';
    modal.style.backgroundColor = 'rgba(0,0,0,0.8)';
    modal.style.zIndex = '10000';
    modal.style.overflow = 'auto';
    modal.style.padding = '20px';
    modal.style.boxSizing = 'border-box';

    // Create content container
    var modalContent = document.createElement('div');
    modalContent.classList.add('info-hotspot-modal-content');
    modalContent.style.backgroundColor = '#222';
    modalContent.style.color = '#fff';
    modalContent.style.borderRadius = '8px';
    modalContent.style.padding = '20px';
    modalContent.style.maxWidth = '800px';
    modalContent.style.margin = '40px auto';
    modalContent.style.position = 'relative';

    // Add close button
    var modalCloseWrapper = document.createElement('div');
    modalCloseWrapper.classList.add('info-hotspot-close-wrapper');
    modalCloseWrapper.style.position = 'absolute';
    modalCloseWrapper.style.top = '10px';
    modalCloseWrapper.style.right = '10px';
    modalCloseWrapper.style.cursor = 'pointer';
    var modalCloseIcon = document.createElement('img');
    modalCloseIcon.src = 'img/close.png';
    modalCloseIcon.classList.add('info-hotspot-close-icon');
    modalCloseWrapper.appendChild(modalCloseIcon);

    modalContent.appendChild(modalCloseWrapper);

    // Add share button
    var modalShareWrapper = document.createElement('div');
    modalShareWrapper.classList.add('info-hotspot-share-wrapper');
    modalShareWrapper.style.position = 'absolute';
    modalShareWrapper.style.top = '10px';
    modalShareWrapper.style.right = '60px';
    modalShareWrapper.style.cursor = 'pointer';
    var modalShareIcon = document.createElement('img');
    modalShareIcon.src = 'img/share.png';
    modalShareIcon.classList.add('info-hotspot-share-icon');
    modalShareWrapper.appendChild(modalShareIcon);

    modalContent.appendChild(modalShareWrapper);

    modalShareWrapper.addEventListener('click', function(e) {
      e.stopPropagation();
      createShareLink(hotspot);
    });

    // Add title and text
    var modalTitle = document.createElement('div');
    modalTitle.classList.add('info-hotspot-title');
    modalTitle.style.fontSize = '1.5em';
    modalTitle.style.fontWeight = 'bold';
    modalTitle.style.marginBottom = '10px';
    modalTitle.innerHTML = hotspot.title;

    var modalText = document.createElement('div');
    modalText.classList.add('info-hotspot-text');
    modalText.innerHTML = hotspot.text;

    modalContent.appendChild(modalTitle);
    modalContent.appendChild(modalText);

    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    // Close modal when clicking outside the content
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        toggle();
      }
    });

    var toggle = function() {
      modal.classList.toggle('visible');
    };

    // Show content when hotspot is clicked
    wrapper.querySelector('.info-hotspot-header').addEventListener('click', function() {
      toggle();
    });


    /*================================================================*/
    // Share functionality for all hotspots
    shareWrapper.addEventListener('click', function(e) {
      e.stopPropagation();
      createShareLink(hotspot);
    });
    /*================================================================*/


    // Hide content when close icon is clicked.
    modal.querySelector('.info-hotspot-close-wrapper').addEventListener('click', toggle);

    // Prevent touch and scroll events from reaching the parent element.
    // This prevents the view control logic from interfering with the hotspot.
    stopTouchAndScrollEventPropagation(wrapper);

    return wrapper;
  }

  /*================================================================*/
  function createShareLink(hotspot) { 
    // Get current scene
const currentScene = scenes.find(scene => 
    scene.data.infoHotspots.some(h => h.title === hotspot.title && h.yaw === hotspot.yaw && h.pitch === hotspot.pitch)
);
    
    if (currentScene) {
        // Use hotspot's yaw/pitch coordinates
        const shareUrl = setUrlParams(
            currentScene.data.id,
            hotspot.yaw,
            hotspot.pitch,
            currentScene.data.initialViewParameters.fov
        );
        
        // Copy to clipboard
        navigator.clipboard.writeText(shareUrl).then(function() {
            alert('Share link copied to clipboard!\n' + shareUrl);
        }).catch(function(err) {
            alert('Failed to copy share link: ' + err);
        });
    }
  }
  /*================================================================*/


  // Prevent touch and scroll events from reaching the parent element.
  function stopTouchAndScrollEventPropagation(element, eventList) {
    var eventList = [ 'touchstart', 'touchmove', 'touchend', 'touchcancel',
                      'wheel', 'mousewheel' ];
    for (var i = 0; i < eventList.length; i++) {
      element.addEventListener(eventList[i], function(event) {
        event.stopPropagation();
      });
    }
  }

  function findSceneById(id) {
    for (var i = 0; i < scenes.length; i++) {
      if (scenes[i].data.id === id) {
        return scenes[i];
      }
    }
    return null;
  }

  function findSceneDataById(id) {
    for (var i = 0; i < data.scenes.length; i++) {
      if (data.scenes[i].id === id) {
        return data.scenes[i];
      }
    }
    return null;
  }

  /*==========================================================*/

  // URL Parameter Handling Functions
  function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    return {
      scene: params.get('scene'),
      yaw: params.get('yaw') ? parseFloat(params.get('yaw')) : null,
      pitch: params.get('pitch') ? parseFloat(params.get('pitch')) : null,
      fov: params.get('fov') ? parseFloat(params.get('fov')) : null
    };
  }

  function setUrlParams(sceneId, yaw, pitch, fov) {
    const params = new URLSearchParams();
    params.set('scene', sceneId);
    params.set('yaw', yaw.toFixed(6));
    params.set('pitch', pitch.toFixed(6));
    params.set('fov', fov.toFixed(6));
    
    const newUrl = window.location.origin + window.location.pathname + '?' + params.toString();
    return newUrl;
  }

  function clearUrlParams() {
    window.history.replaceState({}, document.title, window.location.pathname);
  }

  // Display the initial scene with URL parameter support
  const urlParams = getUrlParams();
  if (urlParams.scene) {
    const targetScene = findSceneById(urlParams.scene);
    if (targetScene) {
      switchScene(targetScene);
    } else {
      switchScene(scenes[0]);
    }
  } else {
    switchScene(scenes[0]);
  }

  /* =============================================================================== */
  // Audio control functionality
  function setupAudioControls() {
    // This will be called when hotspots are created to set up audio controls
    document.addEventListener('click', function(e) {
      if (e.target.closest('#playAudio') || e.target.closest('#playAudio img')) {
        const audioButton = e.target.closest('#playAudio') || e.target.closest('#playAudio img').parentElement;
        const audioElement = audioButton.nextElementSibling;
        
        if (audioElement.paused) {
          audioElement.play();
          audioButton.innerHTML = '<img src="img/pause.png" alt="Pause Audio" />';
        } else {
          audioElement.pause();
          audioButton.innerHTML = '<img src="img/play.png" alt="Play Audio" />';
        }
      }
    });
  }

  // Set up audio controls after a short delay to ensure DOM is ready
  setTimeout(setupAudioControls, 1000);

})();

/* =============================================================================== */


  function openFullscreen() {
  const img = document.getElementById('artImage');
  img.classList.add('fullscreen-image');
}


  // Optional: adjust styling when in fullscreen
  document.addEventListener("fullscreenchange", () => {
    const img = document.getElementById("artImage");
    if (document.fullscreenElement === img) {
      img.style.width = "100%";
      img.style.height = "100%";
      img.style.objectFit = "contain"; // makes sure it scales properly
    } else {
      img.style.width = "500px";
      img.style.height = "400px";
      img.style.objectFit = "cover"; // back to normal
    }
  });