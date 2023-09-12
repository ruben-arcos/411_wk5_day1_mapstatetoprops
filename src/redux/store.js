// Import the 'legacy_createStore' function and alias it as 'createStore' from the 'redux' library.
import { legacy_createStore as createStore } from "redux";
// Import the 'reducers' object from the './reducers' file.
import reducers from "./reducers";
// Import the 'state' object from the './state' file.
import state from "./state";

// Create and export a Redux store using the 'createStore' function.
// This store will use the 'reducers' to manage state and will initialize with the 'state' object as the initial state.
export default createStore(reducers, state);
