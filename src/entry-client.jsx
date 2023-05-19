import ReactDOM from 'react-dom/client'
import App from './components/App/App'

ReactDOM.hydrateRoot(document.getElementById('root'), <App />)
console.log('hydrated')
