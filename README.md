# CAS FEE PROJEKT 2 : Web Shop Implementation with Angular7 + Firestore

- Bruno Staub (https://github.com/bstaub)
- Martin Polak (https://github.com/MartinPolakHSR)


Shop deployed to Firebase with HTTPS custom Domain:

https://www.mabrweb.com

https://mabr7-shop.firebaseapp.com/  (firebase hosting domain)


## Installation

### DEV Dependencies

`Node 8.12.0 LTS, NPM 6.4.1, Angular CLI@7.0.6`

### Application Setup for Development

```bash
git clone https://github.com/bstaub/mabr7.git'
npm install
npm install -g @angular/cli@7.0.6  (for developing and deploy)
ng serve -o
```

### Run unit tests

`ng test`

Executes the unit tests via [Karma](https://karma-runner.github.io).


### Deploy App

`npm run deploy`


### Deploy Clound Function with Sendgrid.com (Order Email)

`firebase functions:config:set sendgrid.key=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`
`firebase deploy --only functions`


## Feature Set

### Shop functionality

#### Shop Front Page

- Slider images with link to corresponding category filtered product view
- Features for «News», «Sale» and «Bestseller» Products
- Footer with dynamically generated category links
- RWD Offside Menu 


#### Products

- Products fetched from Firestore (ProductService)
- Sorting: Products can be sorted by price and name
- Filtering: Products can be filtered by category
- sorting and filtering can be used combined
- Products can be viewed in a grid or a list view
- When logged in as a user with adminstrative rights, additional buttons are shown for product CRUD operations and user Administration
- Products can be searched through search input field (Full Text Search in name)
- Products grid/list view have a pageination, items per Page are stored in centralized settingsService
- Product Detail Page has SEO optimized URL produkte/detail/{{id}}/{{category}}/{{productname}}
- Product Detail Add to Favorite is SEO optimized {{productname}}: {{Domain}}: {{Category}}


#### Product CRUD

- https://www.mabrweb.com/admin/home (need Admin Role to managed)
- Add a new product
- Add a new category
- Edit existing product
- Delete existing product with delete confirmation
- Delete existing category with delete confirmation
- Images handled with Firebase Storage
- Products can have specification Tabs
- Products can be flaged with discount, new, bestrated 
- Sale products can be distinguished with a discount factor
- Products status active / inactive can be set
- Categories search 



#### Cart

- Products can be added from the product detail view
- Cart is handled via a OrderService
- Adding the same product multiple times, increases the amount in cart
- Order (Cart) has a dedicated cart page and is visible as a dropdown widget as well
- Quantity of each cart item can be adjusted via cart page
- Cart can be cleared at once
- Single products can be removed from cart
- Subtotal and Totals will be calculated on the fly
- For Sale Product the original price / discount / sale price is visible
- Cart is organized through local storage / synchronized with firestore for registered users
- After login last cart items are loaded into local storage


#### Checkout

- Prefill fields, if user is already logged in (inputs of last order)
- No enter of email adress needed for registered users
- Enter Address, Shipping Method and Payment Data with Validation
- Show review of the order before final submit
- abg checkbox must be checked before submitting the order (agb with link)
- When submitting a order, OrderService creates a new unique order number
- When submitting a order, OrderService stores the order in orders_completed
- Anonymous Orders are possible too, in that case OrderService creates a new anonymous order
- Order step is shown in the top during the checkout process


#### Orders

- Checkout process generates Order for registered user or guest
- Order / Confirmation Email for Shop/User/Guest (processed through SendGrid; https://sendgrid.com/ )



#### Authentication

- Sign up: Create user account
- Log in: General login or during checkout
- Role based authentication (isAdmin, authuser)
- Checkout: As registered user / guest


#### Account

- Create new shop user accounts / Double Logged id with 
- Login with existing user account and password 
- User Profile page shows Firstname, Lastname, Email, Photo is updatedable
- Role base authentication via Firebase, roles can be assigned to users like isAdmin
- Order history is visible to logged in users (not finished yet)


### Security

- API are currently in github to allow teacher to testing the app (this is no go for production!!)
- FireBase Security Rules for Shop User / Admin
- tables are only writeable for authenticated user

### General

- Lazy Loading Feature is implemented for Products, Order and Checkout Component

### Angular Univeral SSR

- was tested, but could not implemented in this project because some TypeError in firebase.auth, alertify and localstorage. we will implement this feature when we can fix the issues.
