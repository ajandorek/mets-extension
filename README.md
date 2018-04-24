# Do the Mets play today?

A small chrome extension that tells you whether or not the mets play today and who they are playing.

To install first download the repo and request an api key from [here](https://www.mysportsfeeds.com/). Once you have your key, create the following files:

```
.env.production
.env.development
```

create two ENV variables following the Create-React-App guidelines named the following:

```
REACT_APP_KEY1
REACT_APP_KEY2
```

(PLEASE NOTE: These files are automatically ignored from git tracking, if you plan to tackle storing your API keys in a different manner please make sure you update the git ignore). After this run the following:

```
npm install
```

Alternatively

```
yarn install
```

The command to run the application is:

```
npm run
```

Alternatively

```
yarn run
```

This application uses `node-sass-chokidar` by default and the command to build the SASS files are bundled into the run command. If you do not plan on using SASS, please update the run command in the package.json file.

The app will run in the browser for dev purposes but to run as intended follow the next few steps:

1.  run either `npm build` or `yarn build`
2.  Navigate to `chrome://extensions`
3.  Click `Load Unpacked` and navigate to your newly created build folder.
4.  enjoy your new chrome extension and LGM🍎!

Technologies Used:

```
1. React
2. Axios
3. SCSS
```
