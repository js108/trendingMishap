# Trending Mishap
## A bot who wants to be part of the conversation
## (but all it knows are twitter trends)

This repo contains a twitter bot and a website that combine random twitter trends to create strange aleatory tweets. It's written in javascript using node and react.

[The site](https://trending-mishap.herokuapp.com/) | [The Bot](https://twitter.com/trending_mishap)

##How it works

The node app(index.js) has three routines, all of which are in the /myModules directory:

**trendcomposer.js** Composes functions that search the twitter api, clean up the data, and save it to the json that the other routines will use.

**botcomposer.js** Composes functions that writes a tweet and tweets it via the bot.

**tweetReader.js** Reads the json and sends it to the react site when requested.

ALl the react stuff lives in the /client directory. The main app is /client/src/App.js. It calls /myModules/tweetReader.js via /index.js everytime someone visits and presents them with an interface that lets them write and tweet their own mishaps.

The relevant files are commented if you want see more.

## How to make your own

1. install node, react, and yarn

2. git clone https://github.com/js108/trendingMishap.git

3. cd trendingmishap

4. yarn install

5. set up your twitter apps and endpoints for pinging via the instructions in .env-example

6. yarn start (to start your node server)

7. (in a second terminal window) cd client

8. yarn start (to start yr react server)

That should get your dev environment running.

I set up the app based on this article [Create React App with Express in Production](https://daveceddia.com/create-react-app-express-production) which was super helpful and has further info about how to deploy to heroku. This article will tell you how to configure your heroku env variables [Configuration and Config Vars](https://devcenter.heroku.com/articles/config-vars).

## What's interesting about this
Watching the mind strive for meaning.