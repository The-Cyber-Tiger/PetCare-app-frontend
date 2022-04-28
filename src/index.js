import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './App'

function Index(){
    return(
        <StrictMode>
            <App />
        </StrictMode>
    )
}

ReactDOM.render(
    <Index/>, document.getElementById('root')
    )