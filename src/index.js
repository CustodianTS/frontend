import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import IndexComponent from './IndexComponent';
import SignIn from './signin';

class Router extends React.Component{
    render(){
        console.log(window.location.href)
        return <div>
            {window.location.pathname == "/onboard" && <App/>}
            {window.location.pathname == "/" && <IndexComponent/>}
            {window.location.pathname == "/signin" && <SignIn/>}
        </div>
    }
}

ReactDOM.render(<Router />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
