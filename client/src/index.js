import React from 'react';
import {render} from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './app';
import './index.css';


render(<App />, document.getElementById('root'));
registerServiceWorker();
