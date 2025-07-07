# Clinicals App

This is a React application for managing patient clinical data, bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


# 1.st step: to run in codespaces
go to clinicals-app directory and run the following command:
npm install
npm start.

```bash

## Features

- View patient details
- Add new patients
- Add clinical data for patients
- Responsive table layout

## Backend Integration

This app connects to a backend API hosted at: `http://my-app-abhishek1426-dev.apps.rm3.7wse.p1.openshiftapps.com`

## CORS Issue and Solution

### Problem
When making API calls to the external backend server, we encountered a CORS (Cross-Origin Resource Sharing) error:

```
A cross-origin resource sharing (CORS) request was blocked because of invalid or missing response headers of the request or the associated preflight request.
```

### Solution
We fixed this issue by implementing a proxy configuration in the React development environment:


****did this chnage to solve the CORS issue in codespaces****


1. **Added proxy configuration** to `package.json`:  (change this url to latest spring boot app url)
   ```json
   "proxy": "http://my-app-abhishek1426-dev.apps.rm3.7wse.p1.openshiftapps.com"
   ```

2. **Updated all API calls** to use relative URLs instead of absolute URLs:
   - Changed from: `axios.get('http://my-app-abhishek1426-dev.apps.rm3.7wse.p1.openshiftapps.com/api/patients')`
   - To: `axios.get('/api/patients')`

### How it works
- The proxy tells the React development server to forward API requests to the backend server
- Since requests now appear to come from the same origin, CORS restrictions don't apply
- This solution works for development; for production, ensure proper CORS headers are configured on the backend

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

