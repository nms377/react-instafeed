# React Instafeed
> A recreation of my personal Instagram feed made with React

## Introduction
Recreated my personal Instagram feed using:
- **React** for building the front-end User-Interface (UI)
- HTML and CSS (via [sass](https://sass-lang.com))
- **Instagram API** to access my content via an access token

## Specifications

### Views (component)
There are two views of my feed: Grid and List

#### Grid Properties

The Grid view, which is the default view, includes:
  1. Images from my feed nested in a Background Image style element to ensure the images cover the entire square container, including the images that are not a perfect 1:1 ratio.

#### List Properties

The List view includes:
  1. Images in their original orientation (1:1, portrait, or landscape)
  1. Captions from my posts.

#### Instagram API Endpoints

The Instagram API Endpoints:
  - Accessed my Instagram content using the Instagram Sandbox to receive an Access Token that allowed me to retrieve my user content information using JSON.

### Styles
Used the grid and hamburger image assets and bar scheme from a previous Instagram project using AngularJS. Used SASS and gulp to manage my CSS styling and to manage the sizing of my images in the Grid view so they maintain their 1:1 aspect ratio when the browser size fluctuates.

#### Responsive Layout
Created a desktop and mobile view. Go to: [https://nms377.github.io/react-instafeed/](https://nms377.github.io/react-instafeed/) to view.