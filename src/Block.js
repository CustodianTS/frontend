import * as React from 'react';
import './App.css';

export default class Block extends React.Component{
    render(){
        return <div className="block">
                <div className="inline">
                    <button>Info</button>
                    <button>Block</button>
                </div>
        </div>
    }
}