# Topic explorer app
This app is built to help you to find the related topics that one topic has, also, it will show the stargazers of each topic.

## Getting started

First, you will need to have the following:

Node Version 16x you can download it in this [link](https://nodejs.org), or you can install [NVM](https://github.com/nvm-sh/nvm#installing-and-updating) and just run:

### `nvm use` 

After intalled node you can run the following to isntall all the dependencies needed

### `npm ci`

## Token generation

This app needs a github token like [this one](https://docs.github.com/en/graphql/guides/forming-calls-with-graphql).

After generate your token, you will create a `.env` file at root level who contains 

```
REACT_APP_GRAPHQL_API_URL=https://api.github.com/graphql
REACT_APP_GITHUB_TOKEN=YOUR_TOKEN
```

## Run app
To start the app you will run:

### `npm run start`

## Testing app
To see de unit tests, run the following:

### `npm run test`