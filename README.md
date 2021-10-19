# IP Address Tracker

![Desktop Preview](./design/desktop-preview.jpg)

This is a solution to the [IP Address Tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [Getting started](#getting-started)
  - [GeoIPify API](#geoipify-api)
    - [How to get key](#how-to-get-key)
    - [Where to use the key](#where-to-use-the-key)
  - [Start the project](#start-the-project)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Links

- [Solution URL](https://www.frontendmentor.io/solutions/ip-address-tracker-quPyKaGQo)
- [Live Site URL](https://ip-address-tracker-omarlawaty.vercel.app/)

## Getting started

### GeoIPify API

#### How to get key

To use the IP Geolocation API by IPify, you'll need to sign up for a free account. You won't need to add any cards details to do this and it's a very quick process. This will generate an API Key for you. Usually, you would be able to restrict your API Key to a specific URL (your domain). This makes sure that other people can't use your API Key on their websites. IPify doesn't have this feature, but because you aren't adding your card details, this isn't an issue. **So be sure to only sign up for the free account and DO NOT enter any card details**.

#### Where to use the key

To use the Key you got from GeoIPify , Go to the [src directory](../src) and create .env File and store your key in `BD_KEY="YOURKEY"`

### Start the project

Make sure to have `node.js` and `yarn`installed and that you are in the root directory of the project, then simply run:

```bash
yarn
```

To run the development server, execute:

```bash
yarn start
```

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- [Sass](https://create-react-app.dev/docs/adding-a-sass-stylesheets) - Css library
- [Leaflet](https://react-leaflet.js.org/) - React maps library
- [GeoIPify](https://geo.ipify.org/) - IP Location API

### Useful resources

- [W3schools](w3schools.com/)
- [stackoverflow](stackoverflow.com/)
- [MDN Web Docs](https://developer.mozilla.org/en-US/)

## Author

- Name - Omar Mohamed
- Frontend Mentor - [@OmarLawaty](https://www.frontendmentor.io/profile/OmarLawaty)
- Twitter - [@OmarLawaty](https://twitter.com/OmarLawaty)
