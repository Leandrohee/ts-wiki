# Firsts comands to start a typescript project

## Check the version of your node and change the version to 20 (I like to use this version)

```shell
node --version
nvm use 20
```
## Add the configuration of the tipe of engine in package.json -> "node": "20.0"

```json
{
  "name": "wyol-client",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "engines": {
    "node": "20.x"
    },
}
```

## Now install the basics dependencies

```javascript
yarn init                       //To create a package.json
yarn add typescript -D          //To install typescript on your project
yarn add nodemon -D             //To restart the program if any file changes
tsc --init                      //Add ts.config in the folder
yarn add ts-node -D             //It allows to run typescript direct on node
yarn add @types/node -D         //Type dependence related to ts-node
```

## Creating the basic structure (folders)

- dir (Production folder -> javascript)
    - index.js (generated automatic with build)
- src (Development folder -> typescript)
    - index.ts (manualy created)

## Setting the file tsconfig.json

- Uncomment this lines in the tsconfig file

```json
{
    "outDir": "./dist",
    "rootDir": "./src",        
    "strictPropertyInitialization": true, 
    "experimentalDecorators": true, 
    "emitDecoratorMetadata": true,
}
```

## Settings the file package.json

```json
"engines": {
"node": "20.x"
},
"main": "index.js",
"license": "MIT",
"scripts": {
"start": "node ./dist/index.js",
"dev": "nodemon ./src/index.ts",
"build": "tsc -p ."
},
```

- start (production -> it runs index.js with node)
- dev (development -> it runs index.ts with nodemon)
- build (it compile TS to JS)

