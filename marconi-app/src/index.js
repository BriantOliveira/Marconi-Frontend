import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { addLocaleData } from 'react-intl';
import {IntlProvider} from 'react-intl';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import { localeSet } from "./actions/locale";

addLocaleData(en);
addLocaleData(zh);


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
