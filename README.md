# Google fonts picker

A tool that previews all Google fonts by efficiently rendering without the need to add all fonts stylesheets to the web page, also allows you to select one of these fonts and use it in your application.

This tool uses [webfontloader](https://www.npmjs.com/package/webfontloader), [react-virtualized](https://www.npmjs.com/package/react-virtualized) and [react-virtualized-select](https://www.npmjs.com/package/react-virtualized-select).

## Set your API key

Your application needs to identify itself every time it sends a request to the Google Fonts Developer API, by including an API key with each request.

- Create `.env` file at the root directory.
- Put your key inside the .env file
  `GOOGLE_FONTS_KEY= *your_key*`

## Run the app

- Install the dependencies `npm install`
- Run the application by the following command
  `npm start`
- Open http://localhost:3000 to view it in the browser.
