import * as React from 'react';
import './App.css';

export default class SignIn extends React.Component{
    render(){
        return <div>
            <div className="ticker"></div>
            <nav>
                <p className="title">SimplePoC</p>
            </nav>
            <div className="login">
            
            <p className="formtitle">Login</p>
            <form>
                <div className="form">
                    <p>Username</p><br/>
                    <input type="username"/><br/>
                    <button class="btn">Login</button>
                </div>
            </form>
            </div>
        </div>
    }
}