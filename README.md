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
To see de unit tests, run the following:

### `npm run test`

## Runing app
Consider this is a gif so it moves faster 
![topic-explorer](https://user-images.githubusercontent.com/22249282/185492115-2df48072-758a-442c-b034-95e21d13c1fb.gif)
