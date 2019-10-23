import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calc from './Calc';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Calc />, document.getElementById('root'));




serviceWorker.unregister();
