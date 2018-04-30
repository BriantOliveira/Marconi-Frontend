import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from "react-router-dom";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import { localeSet } from "./actions/locale";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import englishLocaleData from 'react-intl/locale-data/en';
import history from "./history";
import rootReducer from "./rootReducer";
import setAuthorizationHeader from "./utils/setAuthorizationHeader";


addLocaleData(en);
addLocaleData(zh);

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);


if (localStorage.bookwormJWT) {
  setAuthorizationHeader(localStorage.bookwormJWT);
  // store.dispatch();
} 

if (localStorage.alhubLang) {
  store.dispatch(localeSet(localStorage.alhubLang));
}


ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </Router>, document.getElementById('root'));
registerServiceWorker();
