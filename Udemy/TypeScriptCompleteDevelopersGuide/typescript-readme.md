```terminal
    npm intall -g typescript ts-node
```

### Updated Parcel Instructions

In the upcoming lecture, we will be installing the parcel-bundler tool globally to our system. 
This is no longer necessary as the new Parcel tool can be run without installation using npx.

To build the app and run the development server, simply run the following command in your terminal:

```terminal
    npx parcel index.html
```

### Project setup

TSC Config
```terminal
    tsc --init
```
Creates new tsconfig.json file, where we can configure our typescript compiler.
For example, we can set source and destination folders for output
    
    ```json
        "outDir": "./dist",
        "rootDir": "./src",
    ```

Then init npm package
```terminal
    npm init -y
```
Install concurrently and nodemon
```terminal
    npm install --save-dev concurrently nodemon
```
Add scripts to package.json
```
    "scripts": {
        "start:build": "tsc -w",
        "start:run": "nodemon build/index.js",
        "start": "concurrently npm:start:*"
    },
```
