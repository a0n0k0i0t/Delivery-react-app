import ReactDOM from 'react-dom'
import './Index.css'
import App from './App'

const { render } = require("@testing-library/react");

ReactDOM.render(
     <App/>,
     document.getElementById('root')
 );