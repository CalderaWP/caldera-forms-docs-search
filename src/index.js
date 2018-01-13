import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App apiRoot='https://calderaformscom.lndo.site/wp-json'/>, document.getElementById('cf-docs-search-app'));
//registerServiceWorker();
