# Template typescript service

A typescript service that works with docker and shit

## Developer instructions

### Cloning this template

duplicate this repo
replace `typescript-service-template` with the name of the service you want to create

### Installing workspace

to install a development environment, you need to have nvm and git installd.
Then, `git clone` this repo locally.
copy `.env.sample` into `.env` so that you have an initial configuration.
run:
```
$ nvm use
$ npm install
$ npm test
```
and that's it, you've just installed the development environment!

This project is written with [VSCode](https://code.visualstudio.com/) in mind. specifically configured for these extensions: [dbaeumer.vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), [esbenp.prettier-vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).

### test

`npm run test`

runst code checks and then execute internal tests.

`npm run test:quick`

only executes internal tests.

`npm run test:quick -- --watch` 

run tests in watch mode.

### clean

`npm run clean`

Removes any built code and any built executables.

### build

`npm run build`

Cleans, then builds the service and docker image.

Your built code will be in the `./dist/` directory, the docker image will be written to the local docker exporter.

### End-to-end Testing

`npm run test:e2e`

runs end-to-end tests against a built docker image (you need to run `npm run build` beforehand, though).
