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

