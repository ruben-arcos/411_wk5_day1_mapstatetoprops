// Import the React library, which is necessary for creating React components.
import React from 'react';
// Import the 'Navigation' component from the './components/Navigation' file.
import Navigation from './components/Navigation'
// Import the CSS styles from the './App.css' file.
import './App.css'
// Import the 'Router' component from the './Router' file.
import Router from './Router'
// Import the 'BrowserRouter' component from 'react-router-dom'.
// This component provides routing functionality for your application.
import { BrowserRouter } from 'react-router-dom'
// Import the 'Provider' component from 'react-redux'.
// This component is used to provide the Redux store to your application.
import { Provider } from 'react-redux'
// Import the 'store' object from './redux/store'.
// This 'store' contains your Redux configuration and state management setup.
import store from './redux/store'

// Define the 'App' function component, which is the root component of your application.
function App() {
  return (
        // Wrap your entire application with the 'Provider' component to provide the Redux store.
    <Provider store={store}>
       {/* Wrap your application in the 'BrowserRouter' to enable client-side routing. */}
      <BrowserRouter>
        {/* Render the 'Navigation' component, which typically includes navigation links. */}
        <Navigation />
        {/* Render the 'Router' component, which handles route rendering based on URL. */}
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

// Export the 'App' component as the root component of your application.
export default App;

/**
 * Here's a summary of what this code does:
 * 
 * 1. It imports necessary libraries and components:
        * React for creating React components.
        * Navigation component from './components/Navigation' for rendering navigation links.
        * CSS styles from './App.css' for styling the application.
        * Router component from './Router' for handling routes.
        * BrowserRouter from 'react-router-dom' for client-side routing.
        * Provider from 'react-redux' for providing the Redux store.
        * store from './redux/store' for configuring and providing the Redux store.
 
 * 2. It defines the App function component, which is the root component of your application.
 
 * 3. Inside the App component:
        * It wraps the entire application with the Provider component, passing in the Redux store as a prop. This makes the Redux store available to all components in the application.
        * It wraps the application with the BrowserRouter component, enabling client-side routing using React Router.
        * It renders the Navigation component, which typically includes navigation links for navigating between different views or pages.
        * It renders the Router component, which handles route rendering based on the URL, allowing different components to be displayed based on the current route.
 * 
 * 4. Finally, it exports the App component as the root component of your application. This means that when you import and render the App component in your entry point (e.g., 'index.js'), it serves as the starting point for your React application.
 */
