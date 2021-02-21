# Fresh Tech Coding Challenge

> Welcome to the Fresh Tech Coding Challenge!

## Overview

To complete this challenge, you will need to write a simple React.js & Node.js based web app, and provide us the source files to be built.

The purpose of this challenge is to assess your **skills and approach to composing a simple web app** given a set of screens and an API feed.

This challenge is expected to take ~2 hours.

## The Challenge

Using the provided screens/*.jpg as a reference, you'll need to build a set of React components to render the app. You'll also need make an API call to the local server to request the needed data.

> You do not have to match the screens/*.jpg exactly, feel free to use any css or css framework you like (Fresh uses Semantic UI). Assets are provided in the `assets` folder.

Although this is a basic exercise, we'll be looking for **simple, well-designed, performant, and tested code** in the submission.

Please include a `README` with setup instructions, and any tests or other documentation you created as part of your solution.

Also, add the following info to your `README`:

- How did you decide on the technical and architectural choices used as part of your solution?
- Are there any improvements you could make to your submission?
- What would you do differently if you were allocated more time?

## Details

You will need to build the following 3 pages with React:

- A "Home" page
- A "Series" page
- A "Movies" page

The pages should also be usable on mobile and tablet devices.

> You can assume that you do not have to support legacy browsers

### "Home" Page

Refer to the [screens/1-home.jpg](./screens/1-home.jpg) screen.

This will be your `index.html` screen.

You will need to display 2 tiles, which link to the "Series" page and the "Movies" page.

### "Series" and "Movies" Pages

Refer to the [screens/2-series.jpg](./screens/2-series.jpg) and [screens/3-movies.jpg](./screens/3-movies.jpg) screens.

For each page:

- Display the first 21 `entries`
- Where the entry has a `releaseYear` attribute value >= `2010`
- Sorted by the `title` attribute value in ascending alphanumeric order

For the "Series" page filter on:

- Where the entry has a `programType` attribute value of `series`

For the "Movies" page filter on:

- Where the entry has a `programType` attribute value of `movie`

The attributes you should use to display the entries are:

- `title`
- `images` → `Poster Art` → `url`

You will also need to handle the loading and error states of fetching the JSON feed:

- "Loading" state [screens/1.1-loading.jpg](./screens/1.1-loading.jpg)
- "Error" state [screens/1.2-error.jpg](./screens/1.2-error.jpg)

## Directory Structure

`/src` client React.js app files
`/public` publicly served files for client app, ie: index.html
`/server` Node.js server files