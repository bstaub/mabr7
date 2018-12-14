# CAS FEE PROJEKT 2 : Web Shop Implementation with Angular7 + Firestore

- Bruno Staub (https://github.com/bstaub)
- Martin Polak (https://github.com/MartinPolakHSR)

Check out this project online at https://mabr7-shop.firebaseapp.com/


## Installation

### Clone repository

```bash
git clone https://github.com/bstaub/mabr7.git
```

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

Point your browser to localhost:4200. In any case the dev build is not working, there is an already built app available on https://mabr7-shop.firebaseapp.com/ for checking out.


### Run unit tests

```bash
ng test
```

Executes the unit tests via [Karma](https://karma-runner.github.io).


### Deploy App

```bash
npm run deploy
```


### Deploy only Firestore Functions

```bash
firebase deploy --only functions
```


## Feature Set

### Shop functionality

#### Shop Front Page

- Slider images with link to corresponding category filtered product view
- Features for «News», «Sale» and «Bestseller» Products
- BS??


#### Products

- Products fetched from Firestore
- Sorting: Products can be sorted by price and name
- Filtering: Products can be filtered by category
- sorting and filtering can be used combined
- Products can be viewed in a grid or a list view
- When logged in as a user with adminstrative rights, additional buttons are shown for product CRUD operations
- Products can be searched through search input field (Full Text Search in name)
- BS??



#### Product CRUD

- Add a new product
- Add a new category
- Edit existing product
- Delete existing product
- Delete existing category
- Images handled with Firebase Storage
- Sale products can be distinguished with a discount
- BS??


#### Cart

- Products can be added from the list/grid View or product detail view
- Cart is handled via a OrderService
- Adding the same product multiple times, increases the amount in cart
- Order (Cart) has a dedicated cart page and is visible as a dropdown widget as well
- Quantity of each cart item can be adjusted via cart page
- Cart can be cleared at once
- Single products can be removed from cart
- Subtotal and Totals will be calculated on the fly
- For Sale Product the original price / discount / sale price is visible
- Cart is organized throug local storage / synchronized with firestore for registered users
- After login last scart items are loaded into local storage


#### Checkout

- Prefill fields, if user is already logged in (inputs of last order)
- No enter of email adress needed for registered users
- Enter Address, Shipping Method and Payment Data with Validation
- Show review of the order before final submit
- When submitting a order, OrderService creates a new unique order number
- When submitting a order, OrderService stores the order in orders_completed
- Anonymous Orders are possible too, in that case OrderService creates a new anonymous order
- Order step is shown in the top during the checkout process


#### Orders

- Checkout process generates Order for registered user or guest
- Order / Confirmation Email for Shop/User/Guest (processed through SendGrid; https://sendgrid.com/ )



#### Authentication

- Checkout: As registered user / guest
- Sign up: Create user account
- Log in: General login or during checkout
- Role based authentication
- BS??


#### Account

- Create new shop user accounts
- Login with existing user account
- User Profile, Email, Password, Firstname, Lastname are updateable via account page
- Order history is visible to logged in users
- Role base authentication via Firebase, roles can be assigned to users like isAdmin


### Security

- FireBase Security Rules for Shop User / Admin
- !!! TODO

#### General

- ??
