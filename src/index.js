import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';

const el = document.getElementById('cf-docs-search-app');
const apiRoot = el.getAttribute( 'data-api-root');
ReactDOM.render(<App apiRoot={apiRoot} />, el );
//registerServiceWorker();
