import React from 'react';
import { render } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './components/App.jsx';
import store from './store/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}><App /></Provider>);
