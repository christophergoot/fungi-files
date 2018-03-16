# Mushroom Journal  [![Build Status](https://travis-ci.org/christophergoot/fungi-files.svg?branch=master)](https://travis-ci.org/christophergoot/fungi-files)
[Mushroom Journal](https://fungi-files.herokuapp.com/) is a photo-forward personal journal of fungal observations. 

![ScreenShot1](https://s3.amazonaws.com/mushroom-journal-live/screen-shot-1.png) ![ScreenShot2](https://s3.amazonaws.com/mushroom-journal-live/screen-shot-2.png)

## Technology
### Front End
- HTML5
- CSS3
- Vanila JavaScript
### Back End
- Node.js + Express.js (web server)
- AWS S3 (image hosting)
- MongoDB (database)
- Mocha + Chai (testing)
- Continuous integration and deployment with Travis CI
### Security
- JSON Web Tokens (user authentication)
- BCryptJS

## API
Endpoint | Method | Description
-|-|-
"/observations" | GET | Get all observations
“/observations/:id” | GET | Get individual observation
“/observations” | POST | Create new observation
“/observations/:id” | PUT | Update individual observation
“/detete/:id/:filename” | DELETE | Delete single file
"/delete/:id" | DELETE | Delete entire observation


## Attribution
### [Pica](https://github.com/nodeca/pica)
- Image Resize in Browser
### Google Maps API
- Geocoding & Reverse
- Address Autocomplete
- Static Maps
### Icons
- Mushrooms by Brand Mania from the Noun Project
- View by Ben Iconator from the Noun Project
- Edit by Gregor Cresnar from the Noun Project
- Info by Dan Craggs from the Noun Project
- Close by Gregor Cresnar from the Noun Project
- Delete by JeraOcean from the Noun Project
- Featured by Setyo Ari Wibowo from the Noun Project 
- Location by Josh Noreen from the Noun Project
