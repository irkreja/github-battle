import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

/*
A React Component is concerned about
State
Lifecycle
UI
 */

class App extends React.Component {
    render() {
        return (
            <div>
                Hello World!
            </div>
        )
    }
}

ReactDOM.render(
    <App />, // React Element
    document.getElementById('app') // Where to render to the element
)