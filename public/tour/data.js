var APP_DATA = {
  "scenes": [
    {
      "id": "0-spolarium-hall",
      "name": "Spolarium Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 804,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6045082868071621,
          "pitch": 0.013937558173136466,
          "rotation": 5.497787143782138,
          "target": "1-old-senate-session-hall"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.5656561021033006,
          "pitch": -0.3423938244017002,
          "title": "Spolarium Painting <br>by JUAN LUNA Y. NOVICIO",
          "text": `<div class="image-text-container" style="height: auto; width: auto; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 350px; width: 500px;">
                          <source src="artifactVid/SpoliariumVid.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p class="title"><b>Spoliarium Painting</b></p>
                          <p class="subTitle">
                          JUAN LUNA Y. NOVICIO <br> (1857 - 1899)
                          </p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Spoliarium.mp3"></audio> 
                          <p class="video-source">
                            Source: <a href="https://youtu.be/6D9X_7SRxAg?si=E0gO0iRa-C4rdHSr" target="_blank">
                            Spoliarium - Shawn Grenier | The Canvas
                                    </a>
                          </p>
                        </div>
                      </div>

                      <div>
                        <p>
                        Juan Luna’s monumental oil-on-canvas masterpiece, Spoliarium, was painted in 1884 in Rome and measures an imposing 4.22 m by 7.675 m, making it the largest painting in the Philippines.
                        Luna completed the work after eight months of painstaking effort, drawing inspiration from a scene in Rome in the Time of Augustus by Charles Louis Dezobry, which described fallen gladiators lying in the coliseum’s basement—the “spoliarium”—where their weapons and garments were stripped away.
                        </p>
                      </div>
                      
                      <div style="position: relative; display: inline-block;">
                        <img id="artImage" src="artifactImg/SpoliariumPainting.jpg" alt="Spoliarium Painting" style="height:400px; width:750px; object-fit:cover;">
                      </div>

                    </div>`
        },
        {
          "yaw": 1.5449345061562152,
          "pitch": 0.0773967562384634,
          "title": "Bust of Juan Luna Y. Novicio",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <img  src="artifactImg/JuanLuna.png" alt="Bust of Juan Luna Novicio" style="height:300px; width:200px; object-fit:cover;">
                        </div>
                        <div class="text-content">
                          <p class="title"><b>Bust of Juan Luna Novicio N</b></p>
                          <p class="subTitle">
                          ANASTACIO T. CAEDO <br> (1907 - 1990)
                          </p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/BustJuanLuna.mp3"></audio> 
                          <p>
                          The sculptor Mariano Benlliure, a Spanish artist and close friend of Juan Luna, first modeled the bust in plaster after Luna’s big win at the Madrid Exposición Nacional de Bellas Artes with Spoliarium. It was meant as a personal tribute to Luna’s artistic genius.
                          Caedo, born in Batangas, was known to create monuments and statues, including the seven life-size figures of General Douglas McArthur and his Companions at Palo, Leyte.
                          </p>
                        </div>
                      </div>
                    </div>`
        },
        {
          "yaw": 1.7708602364705728,
          "pitch": -0.08095404782790006,
          "title": "Halberds of the Captains of the Philippines",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <img  src="artifactImg/Halberds.png" alt="Philippine Halberds" style="height:300px; width:200px; object-fit:cover;">
                        </div>
                        <div class="text-content">
                          <p class="title"><b>Haldbers of the Captains of the Philippines</b></p>
                          <p class="subTitle">
                          GIFTED BY: ARKANSAN STATE PARK <br> (1874 - 1898)
                          </p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Halberds.mp3"></audio>
                          <p> Since around 1590, the Captain Generals of the Philippines (the chief governors during the Spanish colonial era) enjoyed the protection of a unique bodyguard unit known as the Alabarderos del Virrey, or halberdiers of the Viceroy/Captain General.
                          </p>
                        </div>
                      </div>
                      <div>
                      <p>These guards, modeled after similar royal units like Spain’s Royal Guard or the Pope’s Swiss Guard, were among the rare military formations still equipped with medieval weapons—primarily the halberd, a long polearm combining spear and axe features—even as firearms became increasingly dominant<br><br>        </p>
                      </div>
                    </div>`
        },
        {
          "yaw": 2.834142029796035,
          "pitch": -1.0464504640594896e-7,
          "title": "The Church against the States",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/ElAsesinatoDelGobernadorBustamante.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p class="title"><b>El Asesinato Del Gobernador Bustamante</b></p>
                          <p class="subTitle">
                          FELIX RESURRECCION HILDAGO <br> (1855 - 1913)
                          </p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/ElAsesinatoDelGobernadorBustamante.mp3"></audio>
                        </div>
                      </div>
                      <div>
                        <p>
                        In 1719, Governor-General Fernando Manuel de Bustamante y Bustillo was assassinated in Manila under chaotic and politically charged circumstances. Renowned Filipino painter Félix Resurrección Hidalgo later immortalized this dark colonial moment in his painting titled El asesinato del Gobernador Bustamante, which is housed in the National Art Gallery of the National Museum of the Philippines.
                        The artwork depicts a dramatic scene: a mob of Dominican friars dragging Bustamante down the palace stairs, embodying the tense relationship between the colonial government and the religious orders.
                        </p>
                      </div>

                      <div style="position: relative; display: inline-block;">
                        <img id="artImage" src="artifactImg/ElAsesinatoDelGobernadorBustamante.jpg" alt="El Asesinato del Gobernador Bustamante Painting" style="height:400px; width:500px; object-fit:cover; cursor:pointer;">
                        <!-- Fullscreen Button -->
                        <button onclick="openFullscreen()" style="position: absolute; bottom: 10px; right: 10px; padding: 5px 10px;">
                         Fullscreen
                        </button>
                      </div>

                    </div>`
        },
        {
          "yaw": -1.6002451651988692,
          "pitch": -0.04089851312854442,
          "title": "Monument of Arthur Walsh Fergusson",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <img  src="artifactImg/MonumentArthurWalshFergusson.png" alt="Monument of Arthur Walsh Fergusson" style="height:300px; width:300px; object-fit:cover;">
                        </div>
                        <div class="text-content">
                          <p class="title"><b>Monument of Arthur Walsh Fergusson</b></p>
                          <p class="subTitle">
                          MARIANO BENLLIURE Y GIL <br> (1862 - 1943)
                          </p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/MonumentArthurWalshFergusson.mp3"></audio>
                        </div>
                      </div>
                      <div>
                        <p>
                        The Monument of Arthur Walsh Fergusson, created in 1912 by Spanish sculptor Mariano Benlliure y Gil, honors the first Executive Secretary of the Philippines. Originally unveiled in 1913 at Plaza Fergusson, Ermita, it was damaged during the Battle of Manila in 1945 and later came under the care of the U.S. Embassy. Today, it is displayed at the National Museum of Fine Arts, notable as the only monument in the Philippines dedicated to an American figure.
                        </p>
                      </div>
                    </div>`
        }
      ]
    },
    {
      "id": "1-old-senate-session-hall",
      "name": "Old Senate Session Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 804,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.7691884773474227,
          "pitch": -0.004045431295043755,
          "rotation": 4.71238898038469,
          "target": "0-spolarium-hall"
        },
        {
          "yaw": -2.756948145571556,
          "pitch": -0.00657648143517342,
          "rotation": 1.5707963267948966,
          "target": "2-gallery-3-pt1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.032202009724891383,
          "pitch": -0.10652368002440568,
          "title": "The Old Session Hall of Senate of the Philippines",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/OldSessionHall.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p class="title"><b>The Old Session Hall of Senate of the Philippines</b></p>
                          <p class="subTitle">
                           (1934 - 1946)
                          </p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/OldSessionHall.mp3"></audio> 
                        </div>
                      </div>
                      <div>
                        <p>
                        The Old Session Hall of Senate of the Philippines - Historic chamber where Filipino legislators once debated national policies, symbolizing both democratic aspirations and the limitations of self-governance under American colonial rule, where real power remained with foreign administrators.
                        </p>
                      </div>
                    </div>`
        },
        {
          "yaw": 3.0109542147034954,
          "pitch": -0.020559694206959023,
          "title": "Botong's Large Scale Painting",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/LargeScalePaintingBotong.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p class="title"><b>Botong's Large Scale Painting</b></p>
                          <p class="subTitle">
                           CARLOS V. FRANCISCO <br> (1912 - 1969)
                          </p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/BotongLarge Scale.mp3"></audio> 
                        </div>
                      </div>
                      <div>
                        <p>
                        Botong's Large Scale Painting - Carlos "Botong" Francisco's monumental works celebrating Filipino history and culture, using indigenous visual narratives to counter colonial artistic traditions and assert national identity through epic storytelling.
                        </p>
                      </div>
                    </div>`
        }
      ]
    },
    {
      "id": "2-gallery-3-pt1",
      "name": "Gallery 3 Pt1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 804,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.3195584117071864,
          "pitch": 0.18924507901467358,
          "rotation": 5.497787143782138,
          "target": "3-gallery-3-pt2"
        },
        {
          "yaw": -1.192437377108666,
          "pitch": 0.07288825913205521,
          "rotation": 5.497787143782138,
          "target": "1-old-senate-session-hall"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.3604167426396199,
          "pitch": -0.1034881672228174,
          "title": "San Emigdio",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>San Emigdio - Colonial religious painting depicting the patron saint against earthquakes, reflecting how Spanish colonizers used Catholic imagery to replace indigenous spiritual practices and maintain social control through divine fear.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": -1.7800882833930025,
          "pitch": -0.09115735950341985,
          "title": "Santa Barbara",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Santa Barbara - Religious artwork portraying the patron saint of artillerymen and miners, symbolizing the militaristic nature of Spanish colonization and the extraction of Philippine resources under the guise of spiritual protection.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": -2.2188411137530295,
          "pitch": -0.3499484669187929,
          "title": "San Buenaventura",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>San Buenaventura - Colonial ecclesiastical painting representing Franciscan influence in the Philippines, demonstrating how religious orders competed for territorial control and indigenous converts while accumulating vast wealth and lands.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": -3.0910239789376934,
          "pitch": 0.25874127676177494,
          "title": "La Apoteosis de Santo Tomas Aquino",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/3.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>La Apoteosis de Santo Tomas Aquino - Glorification of St. Thomas Aquinas emphasizing scholastic theology, used to justify colonial hierarchy and suppress indigenous knowledge systems through European intellectual supremacy.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": 2.2493567810171804,
          "pitch": -0.35719620153353837,
          "title": "San Gregorio Magno",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/4.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>San Gregorio Magno - Depicts Pope Gregory the Great, symbolizing papal authority over the Philippine church and reinforcing the colonial chain of command from Rome to Madrid to Manila.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": -0.8503937453042525,
          "pitch": -0.2149686508531019,
          "title": "Santo Domingo de guzman",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/5.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Santo Domingo de Guzman - Portrays the Dominican order's founder, representing the religious order's powerful role in Philippine education, land ownership, and the perpetuation of social stratification.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": 0.899370831485296,
          "pitch": -0.24389460967715593,
          "title": "Escenas de la Vida de san Noberto Kanten",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Escenas de la Vida de San Norberto Kanten - Illustrates the life of the Cistercian abbot, emphasizing the role of monasticism in shaping Philippine spirituality and education during the colonial period.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": 1.5253000171536542,
          "pitch": 0.05343669439380605,
          "title": "San Juan Nepomuceno",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/6.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>San Juan Nepomuceno - Colonial religious painting depicting the patron saint of confession, highlighting the Catholic Church's role in shaping moral values and social norms in colonial Philippine society.</p>
                      </div>
                    </div>`
        }
      ]
    },
    {
      "id": "3-gallery-3-pt2",
      "name": "Gallery 3 Pt2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 804,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9516067402951585,
          "pitch": 0.1758882968060611,
          "rotation": 0.7853981633974483,
          "target": "2-gallery-3-pt1"
        },
        {
          "yaw": -0.29934018891166936,
          "pitch": 0.15613845787331826,
          "rotation": 5.497787143782138,
          "target": "4-gallery-6-pt1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.5447553336434092,
          "pitch": -0.21378281735593596,
          "title": "Le Santisima Trinidad Paintings",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>San Juan Nepomuceno - Colonial religious painting depicting the patron saint of confession, highlighting the Catholic Church's role in shaping moral values and social norms in colonial Philippine society.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": 2.7268207359298566,
          "pitch": 0.13768200383078977,
          "title": "La Coronacion de la Virgen",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/7.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>La Coronacion de la Virgen - Colonial religious painting depicting the Virgin Mary's coronation, reflecting the intertwining of religious devotion and colonial authority in the Philippines.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": -2.5623367813415623,
          "pitch": 0.10696927553360425,
          "title": "La Coronacion de la Virgen",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/7.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>La Coronacion de la Virgen - Colonial religious painting depicting the Virgin Mary's coronation, reflecting the intertwining of religious devotion and colonial authority in the Philippines.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": -1.8795617600699117,
          "pitch": -0.04737459187200699,
          "title": "La Coronacion de la Virgen",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/7.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>La Coronacion de la Virgen - Colonial religious painting depicting the Virgin Mary's coronation, reflecting the intertwining of religious devotion and colonial authority in the Philippines.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": -1.5311049458158532,
          "pitch": 0.1118631962560368,
          "title": "La Coronacion de la Virgen",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/7.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>La Coronacion de la Virgen - Colonial religious painting depicting the Virgin Mary's coronation, reflecting the intertwining of religious devotion and colonial authority in the Philippines.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": -1.3434666533897488,
          "pitch": -0.19652720314468652,
          "title": "La Coronacion de la Virgen",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/7.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>La Coronacion de la Virgen - Colonial religious painting depicting the Virgin Mary's coronation, reflecting the intertwining of religious devotion and colonial authority in the Philippines.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": -0.9446560481855357,
          "pitch": -0.28645196997708666,
          "title": "La Coronacion de la Virgen",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/7.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>La Coronacion de la Virgen - Colonial religious painting depicting the Virgin Mary's coronation, reflecting the intertwining of religious devotion and colonial authority in the Philippines.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": -1.161440864879843,
          "pitch": 0.12005040921853549,
          "title": "La Coronacion de la Virgen",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/7.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>La Coronacion de la Virgen - Colonial religious painting depicting the Virgin Mary's coronation, reflecting the intertwining of religious devotion and colonial authority in the Philippines.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": -0.07284688675023077,
          "pitch": -0.2715102254906121,
          "title": "Nuestra Senora de la Correa",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                      <p>Nuestra Senora de la Correa - Depicts the Virgin Mary as Our Lady of the Belt, symbolizing maternal protection and the Catholic Church's role in legitimizing colonial rule through religious iconography.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": 0.3379461058914792,
          "pitch": 0.1028958663111581,
          "title": "Nuestra Senora de Guadalupe",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                      <p>Nuestra Senora de Guadalupe - A significant religious image in Mexican culture, representing the Virgin Mary as the patroness of the Americas, symbolizing hope and protection for the indigenous people during and after the Spanish colonization.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": 0.21843396873415344,
          "pitch": -0.36102385015392713,
          "title": "La Inmaculada Concepcion",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                      <p>La Inmaculada Concepcion - A key work in the Spanish colonial art tradition, depicting the Virgin Mary as the Immaculate Conception, emphasizing purity and divine grace in the context of colonialism.</p>
                      </div>
                    </div>`
        }
      ]
    },
    {
      "id": "4-gallery-6-pt1",
      "name": "Gallery 6 Pt1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 804,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.19794747500055,
          "pitch": 0.1813010944886333,
          "rotation": 0.7853981633974483,
          "target": "3-gallery-3-pt2"
        },
        {
          "yaw": 0.599621816122216,
          "pitch": 0.22567891103788718,
          "rotation": 0.7853981633974483,
          "target": "5-gallery-6-pt2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.5503966097329069,
          "pitch": -0.013459005979647998,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": -1.449398755237766,
          "pitch": -0.2642058602596258,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": -2.0906491590514342,
          "pitch": -0.08842386805284619,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": -2.6816427377862517,
          "pitch": -0.42202328871323047,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": 1.822927996565645,
          "pitch": -0.11506550262876303,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": 0.1804935668961658,
          "pitch": -0.1886251443048117,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        }
      ]
    },
    {
      "id": "5-gallery-6-pt2",
      "name": "Gallery 6 Pt2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 804,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.712964003720149,
          "pitch": 0.22575449962761063,
          "rotation": 5.497787143782138,
          "target": "4-gallery-6-pt1"
        },
        {
          "yaw": 1.477165610468587,
          "pitch": 0.1385806776159022,
          "rotation": 10.995574287564278,
          "target": "6-gallery-8"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.5263721802910766,
          "pitch": -0.2945076887828968,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": -0.2566780935186159,
          "pitch": 0.1404538814125651,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": 0.35704967374984875,
          "pitch": -0.2922511751112875,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": 1.2360728433598052,
          "pitch": -0.5046245928368407,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": 1.4368059635700705,
          "pitch": -0.1567197862303189,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": 1.8130868843947647,
          "pitch": 0.10199147644183704,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": 2.8087649336811964,
          "pitch": -0.3272193111680419,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": 3.016795943558421,
          "pitch": -0.06045515789588407,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": 2.6231017934083205,
          "pitch": -0.030437749424368832,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": -2.686368876270304,
          "pitch": -0.3264509398126805,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": -1.429401996714498,
          "pitch": -0.1931100310787066,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        }
      ]
    },
    {
      "id": "6-gallery-8",
      "name": "Gallery 8",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 804,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.1150311793876675,
          "pitch": 0.3410224944213702,
          "rotation": 1.5707963267948966,
          "target": "7-gallery-12"
        },
        {
          "yaw": 1.9353358126403313,
          "pitch": 0.18121811657848141,
          "rotation": 0,
          "target": "5-gallery-6-pt2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.6475282025073348,
          "pitch": -0.11562740355883427,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": -0.7346228952372371,
          "pitch": 0.07385459818962659,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": -0.43502221422307663,
          "pitch": 0.2469585228484732,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": 0.24418694468626256,
          "pitch": 0.29084590554902157,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": 0.5648815684265376,
          "pitch": 0.04148028693389172,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": 0.677155959109804,
          "pitch": -0.15062707616454318,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": 0.8017404470105944,
          "pitch": -0.03193196894890882,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": 1.149952157890958,
          "pitch": -0.3027941739746609,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": 1.4660729771334982,
          "pitch": 0.09156785363292386,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": 1.9039969753822588,
          "pitch": -0.12244953016134552,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": 2.216698094930175,
          "pitch": -0.023381038879698224,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": 2.477275196592715,
          "pitch": 0.13132581134913934,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": -2.9525529239133004,
          "pitch": 0.11049950071942227,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": -2.3856257586976444,
          "pitch": 0.17953272608665216,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": -2.0402912958442023,
          "pitch": -0.21491598221844654,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": -1.387065736290218,
          "pitch": -0.06072089747934939,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": -1.8190108598739911,
          "pitch": 0.15588640709096424,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        }
      ]
    },
    {
      "id": "7-gallery-12",
      "name": "Gallery 12",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 804,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0398755725925852,
          "pitch": 0.14511953211849615,
          "rotation": 0,
          "target": "6-gallery-8"
        },
        {
          "yaw": -0.9140520425233802,
          "pitch": 0.18703521856976835,
          "rotation": 0,
          "target": "8-gallery-15-pt1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.456008896273792,
          "pitch": -0.3377382329451315,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": 2.506018250616787,
          "pitch": 0.05028493858704053,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": 2.08605218848518,
          "pitch": 0.35588894255300474,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": 1.734915698172001,
          "pitch": 0.14285681229871727,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": 0.2919503559688561,
          "pitch": 0.3834900070375049,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": -1.6861737003603015,
          "pitch": 0.22711843576726132,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": -1.7397391290080524,
          "pitch": -0.2707379364672704,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        }
      ]
    },
    {
      "id": "8-gallery-15-pt1",
      "name": "Gallery 15 Pt1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 804,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.678421613191837,
          "pitch": 0.050246321123001536,
          "rotation": 10.995574287564278,
          "target": "7-gallery-12"
        },
        {
          "yaw": 0.9469916585130882,
          "pitch": 0.18473315497257836,
          "rotation": 0,
          "target": "9-gallery-15-pt2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.5905494345499918,
          "pitch": -0.09503161634928858,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": -1.5113509214644374,
          "pitch": 0.07481668099764427,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": -1.4070766201328269,
          "pitch": 0.0628089682149735,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": -1.7994596365767315,
          "pitch": -0.10422361445762718,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": -1.860705793455697,
          "pitch": 0.08659093084528635,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": -2.0387102767707965,
          "pitch": 0.07051183107734182,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": -1.9567642540154147,
          "pitch": -0.09958619794252677,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": -2.272014797531673,
          "pitch": -0.2039469155731961,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": -2.5591942067032036,
          "pitch": 0.11492747361833722,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": 2.477950900860283,
          "pitch": -0.022407695152036666,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": -2.880542064472296,
          "pitch": 0.06675422344843085,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": -2.8839403512102812,
          "pitch": -0.1178430236292467,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": 2.1911396497404683,
          "pitch": -0.16336939251548088,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": 2.0951814209112944,
          "pitch": 0.07437954093385457,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": 1.2789795349109916,
          "pitch": -0.16033033662444396,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": 1.158422686567306,
          "pitch": 0.12066478494486432,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        }
      ]
    },
    {
      "id": "9-gallery-15-pt2",
      "name": "Gallery 15 Pt2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 804,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.44218643171661753,
          "pitch": 0.15664497027465174,
          "rotation": 0,
          "target": "8-gallery-15-pt1"
        },
        {
          "yaw": -2.158340675367331,
          "pitch": 0.092465641201116,
          "rotation": 0.7853981633974483,
          "target": "10-gallery-16"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.7880301192670416,
          "pitch": 0.09688227920483783,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": -2.489510517497278,
          "pitch": 0.13243262359468666,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": -1.980684069784763,
          "pitch": 0.10175075022230828,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": -1.610945387258644,
          "pitch": -0.22676950436664356,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": -1.2782087944673624,
          "pitch": 0.20547541643574974,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        }
      ]
    },
    {
      "id": "10-gallery-16",
      "name": "Gallery 16",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 804,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.0712177703446688,
          "pitch": 0.14612373091365427,
          "rotation": 6.283185307179586,
          "target": "9-gallery-15-pt2"
        },
        {
          "yaw": 1.1733071413412883,
          "pitch": 0.12312122303852391,
          "rotation": 5.497787143782138,
          "target": "11-gallery-22"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.4207241919124218,
          "pitch": 0.19970586266225254,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": -1.4237119161609932,
          "pitch": -0.1888541841445175,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": -1.3081557785868831,
          "pitch": 0.0554043078851052,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": -1.1642596148737248,
          "pitch": -0.04063366201621932,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": -1.7330911232761803,
          "pitch": -0.08648434604689825,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": -1.5322362324886054,
          "pitch": 0.08844704194431685,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": 0.06075091344984429,
          "pitch": 0.19324090659415027,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": -1.7026301907464294,
          "pitch": 0.17972737806342032,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": -2.9066892702357237,
          "pitch": -0.35100097101151384,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": 1.443692871535836,
          "pitch": -0.1324508113358842,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": 1.740506239354298,
          "pitch": 0.011112924102977928,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        }
      ]
    },
    {
      "id": "11-gallery-22",
      "name": "Gallery 22",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 804,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.2818853023744943,
          "pitch": 0.17403573538013362,
          "rotation": 0,
          "target": "10-gallery-16"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.100741970800259,
          "pitch": 0.08972679664746153,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": -0.8184360657552343,
          "pitch": -0.08814035605542969,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": -0.5946248570176902,
          "pitch": -0.038821063733978534,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": -0.7186102715775871,
          "pitch": 0.044208621176379026,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": 0.14324671995720273,
          "pitch": 0.24587777872256922,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": -2.6840417652540296,
          "pitch": -0.24834362593182036,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`
        },
        {
          "yaw": -2.6863376791717375,
          "pitch": 0.0869061204488748,
          "title": "Title",
          "text": `<div class="image-text-container" style="height: 400px; width: 500px; display: flex; flex-direction: column !important;">
                      <div style="display: flex; flex-direction: row; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                        <div class="image-content">
                          <video controls class="right-video" style="height: 200px; width: 300px;">
                          <source src="artifactVid/asgoreTruck.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div class="text-content">
                          <p>Introduction here Year, Artist Name, Art Name</p>
                          <button id="playAudio" class="audio-button">
                            <img src="img/play.png" alt="Play Audio" />
                          </button>
                          <audio id="audio" src="artifactAudio/Bergentrückung.mp3"></audio> //NOTICE:REMOVE THE SAMPLE MP3 & MP4
                        </div>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>`            
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
