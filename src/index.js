import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

const Github = () => {
    return(
        <Provider store={store}>
          <App/>    
        </Provider>
        )
}

ReactDOM.render(<Github />, document.getElementById('root'));
registerServiceWorker();
