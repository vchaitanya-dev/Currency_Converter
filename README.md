# Currency Converter 
#### Table of Contents 
- Introduction
- Installation 
- Getting Started 
- Application Structure 
- Components
- Redux Setup
- API Integration
- Styling 
- Acknowledgements
- Reference

### Introduction

Welcome to the Currency Converter Documentation. This document provides an overview currency conversion application bulit using React and Redux. The application allows used convert using real-time exchange rates 


### Installation 
To get started with the Currency Converter application, Follow these steps: 

- Clone the repository from Github: 
```
git clone 
```

- Navigate into the project directory :
```
cd currency-converter
````
- Install dependencies using npm or yarn
```
npm install
```
or 
```
yarn install
```

### Getting Started 
After installation, you can run the application locally by executing the following command 
```
npm vite
```
This will start the development server and open the application in your default web browser

### Application Structure
The Currency Converter application follows a typical React Project Structure: 

```
currency-converter/
├── public/
├── src/
│   ├── assets/
│   ├── reducers/
│   ├── store/
│   ├── main.js
│   └── App.js
│   └── index.css
└── index.html
└── package.json
└── package-lock.json
└── README.md
```

### Components
The Currency Converter Application consists of serveral components, including:
- Currency Converter
- Currency Selector
- Amount Input

Each component servers a specific purpose in facilitating currency conversion and user interaction


### Redux Setup 
Redux is used for state management in the Currency Converter application. It helps manage application state and facilitates communicatin between components.

The Redux setup includes reducers and a store:

- Reducers : Define how state changes in response to action
- Store : Configures the Redux store with middleware and initial state.
### API Integration
The Currency Converter application integrates with currency exchange APIs to fetch real-time exchanges rates. The application sends requests to the API endpoints and processes the response the response to update the exchange rates accordingly.
### Styling
Styling in the Currency Converter application is achieved using CSS modules.Each component has its own CSS module, which encapsulates styles and prevent conflicts

### Deployment
The Currency Converter application can be deployed to various hosting. Simply build the application using follwing command:

```
npm run build
```
or 
```
yarn run build
```

### Acknowledgements
Special thanks to the creators of React and Redux for providing powerful libraries for building user interfaces and managing application state. 


### References 
- [React Documentation](https://legacy.reactjs.org/docs/getting-started.html)
- [Redux Documenatation](https://redux.js.org/tutorials/index)
- [Currency Converter API](https://github.com/fawazahmed0/currency-api)