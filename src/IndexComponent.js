import * as React from 'react';
import './App.css';
import Block from './Block';

export default class IndexComponent extends React.Component{
    render(){
        return <div>
            <div className="ticker">

            </div>
            <nav>
                <p className="title">SimplePoC</p>

            </nav>
            <div className="shares">
                <p>Shares</p>
                <div className="inline">
                    <Block large/>
                    <div>
                        <Block/>
                        <Block/>
                    </div>
                </div>
            </div>

            

            <div className="articles">
                <p>Articles</p>
                <div className="inline">
                    <div className="block"></div>
                    <div className="block"></div>
                    <div className="block"></div>
                    <div className="block"></div>
                </div>
            </div>
        </div>
    }
}