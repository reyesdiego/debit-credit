# debit-credit API

Nodejs (express)

## Installation

1. Create a folder: `mkdir api-debit-credit`.
2. In the api-debit-credit folder run `npm install` to install dependencies.
3. Run application: `npm start`
4. Visit [http://127.0.0.1:3001/api-v1](http://127.0.0.1:3001/api-v1) in your browser

## API Overview

The API is based on Nodejs with Express. It has http controller and service layer (database layer is faked into memory). With these layers the API is capable of replacing any of them with minor changes, for instance to migrate from express to hapi the only file to change will be expressUp.js and their routes.
The service layer allows a better unit testing because it does not depends on the http but only depends on the core of bussiness rules and for service layer is based on Dependency Injection for better Unit Testing.



# debit-credit ReactJs Client

Create React App based applications

## Installation

1. Create a folder: `mkdir api-debit-credit-client`.
2. In the api-debit-credit-client folder run `npm install` to install dependencies.
3. Run application: `npm start`.
4. Visit [http://127.0.0.1:3000](http://127.0.0.1:3000) in your browser

## API Overview

The Client is based on ReactJs 16.13 Version. It is using Antd liobrary. It is using hooks for state handling.


I encounter a bug when installing antd library with moment package. It is a very recent bug
https://github.com/moment/moment/issues/5484

It took me 30 minutes to find the fix which was adding to package.json
```
"resolutions": {
    "moment": "2.24.0"
},
```

