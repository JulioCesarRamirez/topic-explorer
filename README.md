# Topic explorer app
This app is built to help you to find the related topics that one topic has, also, it will show the stargazers of each topic.

## Getting started

First, you will need to have the following:

Node Version 16x you can download it in this [link](https://nodejs.org), or you can install [NVM](https://github.com/nvm-sh/nvm#installing-and-updating) and just run:

### `nvm use` 

After installing node you can run the following to install all the dependencies needed

### `npm ci`

## Token generation

This app needs a GitHub token like [this one](https://docs.github.com/en/graphql/guides/forming-calls-with-graphql).

After generating your token, you will create a `.env` file at the root level that contains

```
REACT_APP_GRAPHQL_API_URL=https://api.github.com/graphql
REACT_APP_GITHUB_TOKEN=YOUR_TOKEN
```

## Run app
To start the app you will run:

### `npm run start`

## Testing app
To see the unit tests, run the following:

### `npm run test`

## Future enhancements 

1. Refactor API call to call it just once. 
2. Add an observable to avoid the submit in the search input. 
3. Add some styled-components to have a better design.
