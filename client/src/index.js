import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactDOMClient from "react-dom/client";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from "./reducers";

import App from "./components/App";

const root = ReactDOMClient.createRoot(document.getElementById('root'));

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);