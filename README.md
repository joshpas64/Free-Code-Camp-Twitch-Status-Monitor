# Free-Code-Camp-Twitch-Status-Monitor
This repo contains the front-end code for a single client-side web application that allows users to monitor the channel and stream status of a selected list of Twitch Channels.

## HTML Libraries to Add or Viewport Modification Code to Add
```html
<!-- Adding W3School Icons and CSS as well Font-Awesome.io libraries -->
<link rel="stylesheet" href="https://www.w3schools.com/lib/w3.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<!-- Configuration for mobile viewport -->
<meta name="viewport" content="width=device-width, initial-scale=1">

```
* More information on <a href="https://www.w3schools.com/w3css/" target="_blank">W3 CSS Library</a>
* More information on <a href="https://fontawesome.io/icons" target="_blank">Font Awesome Icon Library</a>

## Added CSS Libraries 
* Used latest <a href="https://getbootstrap.com/css" target="_blank">BootStrap Library</a>
* Used BootSwatch's <a href="https://bootswatch.com/cerculean" target="_blank">Cerulean CSS Template</a>
* Links to libraries: BootStrap first, followed by Cerulean Template:
```
https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.6/css/bootstrap.min.css
https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/cerulean/bootstrap.min.css
```

## JavaScript Libraries and API Used
* Used JQuery and <a href="https:getbootstrap.com/javascript" target="_blank">BootStrap Javascript</a>
* JavaScript script import links below, jQuery comes first, folowed by BootStrap
```
https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js
https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.6/js/bootstrap.min.js
```
* The template for a Twitch API that <strong>DOES NOT</strong> require an <em>API_KEY</em> to use is: 
`var base_url = "https://wind-bow.glitch.me/twitch-api/";`
* Templates for accessing the channel-data, stream-data, and user-data respectively:
```javascript
var channel_base = "https://wind-bow.glitch.me/twitch-api/channels";
var stream_base = "https://wind-bow.glitch.me/twitch-api/streams";
var user_base = "https://wind-bow.glitch.me/twitch-api/users";
```
* For selecting or displaying language or country of origin, you will have to interpret it from a <em>JSON field</em> in the object 
  return from the <strong>HTTP/HTTPS</strong> request called <em>.language</em>. To translate into a more readable format use object:
  ```javascript
  var languageCode = {
    "en": "English",
    "fr": "French",
    "dan": "Danish",
    "deu": "Deustch",
    "ger": "German",
    "fin": "Finnish",
    "ita": "Italian",
    "de": "Deutsch",
    "da": "Danish"
  };
  ```
* These were the preselected I used since the option for a user to login to their own Twitch account would require using a Twitch Api 
  that required an <strong>API_KEY</strong>. The channels you pick for testing are entirely up to you.
  ```javascript
  var base_channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
  ```
* If interested in using the `https://wind-bow.glitch.me` API or the official Twitch API root: `https://api.twitch.tv/kraken`
  NOTE: For the official Twitch API you may need to register to obtain clientID's, stream-key's, oauth-tokens. 
  More information can be found on <a href="https://dev.twitch.tv/docs/v5/guides/using-the-twitch-api/" target="_blank">Twitch Developer
  Website</a>
