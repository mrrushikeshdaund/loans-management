# Loan Management System

This project is a Loan Management System built using Angular for the front-end, Node.js/Express for the backend, and MongoDB for the database. The system enables efficient management of customer loans, providing functionalities to create, retrieve, and manage customer data.

---

## Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14+ recommended)
- [Angular CLI](https://angular.io/cli)
- [MongoDB](https://www.mongodb.com/try/download/community)
- npm (Node Package Manager)

---

## Project Setup

### 1. **Create Angular Application**
Run the following command to create the Angular application:

```bash
g ng new loan-management-system
```

### 2. **Add Bootstrap and Scripts**
Edit `angular.json` to include Bootstrap and Angular Material themes:

```json
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "@angular/material/prebuilt-themes/azure-blue.css",
  "src/styles.scss"
],
"scripts": [
  "node_modules/jquery/dist/jquery.min.js",
  "node_modules/bootstrap/dist/js/bootstrap.min.js"
]
```

Install dependencies:

```bash
npm install bootstrap jquery @angular/material
```

### 3. **Generate Bootstrap Components**
Run the following command to generate Bootstrap components:

```bash
mkdir express-generator
cd express-generator
npx express-genrator
```

### 4. **Backend Setup**

#### a. **Install Mongoose**
Install Mongoose for MongoDB:

```bash
npm install mongoose
```

#### b. **Create Models**
Create a `models` folder and define a customer model in `customers.model.js`:

```javascript
const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  loanAmount: { type: Number, required: true },
  loanStatus: { type: String, default: 'Pending' },
}, { timestamps: true });

module.exports = mongoose.model('Customer', CustomerSchema);
```

#### c. **Create Routes**
Create a `routes` folder and define routes for customers in `customers.routes.js`:

#### d. **Add Routes**
Add `routes` into `app.js` files






## Additional Notes
- Ensure that all dependencies are installed using `npm install` before running the application.
- The database connection string can be updated in `app.js` if you are using a remote MongoDB server.
- Modify or add new routes and models based on the project requirements.

---

## License
This project is licensed under the MIT License.

