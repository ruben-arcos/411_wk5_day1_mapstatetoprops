// Import React, which is necessary for creating React components.
import React from "react";
// Import the 'Switch' and 'Route' components from 'react-router'.
import { Switch, Route } from "react-router";
// Import the 'Home' component from the './containers/Home' file.
import Home from "./containers/Home";
// Import the 'About' component from the './components/About' file.
import About from "./components/About";
// Import the 'Car' component from the './containers/Car' file.
import Car from "./containers/Car";
// Import the 'Dashboard' component from the './containers/Dashboard' file.
import Dashboard from "./containers/Dashboard";

// Define the 'Router' component, which sets up the routing for your application.
const Router = () => {
  return (
    // Use the 'Switch' component to render the first matching 'Route' inside.
    <Switch>
      {/* Define a 'Route' with 'exact path="/"'. This route renders the 'Home' component when the URL exactly matches the root path ("/"). */}
      <Route exact path="/" component={Home} />
      {/* Define a 'Route' with 'path="/about"'. This route renders the 'About' component when the URL matches "/about". */}
      <Route path="/about" component={About} />
      {/* Define a 'Route' with 'path="/car/:id"'. This route renders the 'Car' component when the URL matches "/car/{some_id}". */}
      <Route path="/car/:id" component={Car} />
      {/* Define a 'Route' with 'path="/dashboard"'. This route renders the 'Dashboard' component when the URL matches "/dashboard". */}
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
};

// Export the 'Router' component, which can be used to handle routing in your application.
export default Router;

/**
 * Here's a breakdown of what this code does:
 * 
 * 1. It imports necessary libraries and components:
        * React for creating React components.
        * Switch and Route components from 'react-router' for setting up routing in your application.
        * Home component from './containers/Home' for rendering the home page.
        * About component from './components/About' for rendering the about page.
        * Car component from './containers/Car' for rendering car details pages.
        * Dashboard component from './containers/Dashboard' for rendering the dashboard page.
 
 * 2. It defines the Router component, which sets up routing for your application.
 
 * 3. Inside the Router component:
        * It uses the <Switch> component to wrap a list of <Route> components. The <Switch> component renders the first matching <Route> and prevents further matching routes from rendering. This is used to ensure that only one route is rendered.
        * It defines multiple <Route> components, each with a specific path and component prop:
                * The first <Route> has exact path="/", which matches the root path ("/"). It renders the Home component when the URL exactly matches the root path.
                * The second <Route> has path="/about", which matches "/about". It renders the About component when the URL matches "/about".
                * The third <Route> has path="/car/:id", which matches "/car/{some_id}". It renders the Car component and allows for a dynamic :id parameter in the URL.
                * The fourth <Route> has path="/dashboard", which matches "/dashboard". It renders the Dashboard component when the URL matches "/dashboard".
 
 * 4. Finally, it exports the Router component. This component can be used in your application to handle routing, ensuring that the appropriate component is rendered based on the URL path.
 */
