import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import * as serviceWorker from './serviceWorker';

import './index.less';

if (process.env.NODE_ENV !== 'production') {
  require("./hot");
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
serviceWorker.register();