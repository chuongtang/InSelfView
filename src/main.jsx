import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'virtual:windi.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store';
import { Windmill } from '@windmill/react-ui';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Windmill>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </Windmill>,
  </React.StrictMode>
)
