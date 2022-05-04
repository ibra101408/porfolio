import ReactDOM from 'react-dom/client'; //this is for the new version React (18)
import App from './App'
import './index.css'

//ReactDOM.render(<App/>, document.querySelector('#root'))

const container = document.getElementById("root");
const rootContainer = ReactDOM.createRoot(container);
rootContainer.render(
    <App/>
)

