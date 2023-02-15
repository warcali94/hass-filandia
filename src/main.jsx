import  React, { create } from 'react';
import ReactDOM from 'react-dom/client'
import App from './components/App'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode Provider>
    <App />
  //</React.StrictMode>,
)
