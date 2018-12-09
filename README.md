# CAS FEE PROJEKT 2 : Web Shop Implementation with Angular7 + Firestore

- Bruno Staub (https://github.com/bstaub)
- Martin Polak (https://github.com/MartinPolakHSR)

Check out this project online at https://mabr7-shop.firebaseapp.com/


## Installation

### Clone repository

```bash
git clone https://github.com/bstaub/mabr7.git

### Install Angular-Cli globally

```bash
npm install -g @angular/cli
```

### Install NPM packages

```bash
cd mabr7
npm install
```

### Install NPM packages for Cloud Firestore Functions

```bash
cd mabr7/functions
npm install
```

### Run development server

```bash
ng serve
```

Runs a webpack-development server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Checkout the shop

Point your browser to localhost:4200. In any case the dev build is not working, there is an already built app available on hhttps://mabr7-shop.firebaseapp.com/ for checking out.
??Deeplinking for the Angular router is handled via .htaccess config.

### Run unit tests

```bash
ng test
```

Executes the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

```bash
ng e2e
```

Executes the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Build app for prod

```bash
ng build --prod --build-optimizer
```

This builds the app for prod environment into a /dist folder. Uses the Angular-AOT-mode to precompile the the app. This reduces the app-footstep (compiler is around 1/3 of bundle).


### Deploy App

```bash
npm run deploy
```



### Deploy only Firestore Functions

```bash
firebase deploy --only functions
```
