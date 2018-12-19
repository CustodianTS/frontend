import * as React from 'react';
import './App.css';

export default class IndexComponent extends React.Component{
    render(){
        return <div>
            <div className="ticker">

            </div>
            <div>
                <p>Upcoming</p>
                <div className="inline">
                    <div className="block"></div>
                    <div className="block"></div>
                    <div className="block"></div>
                    <div className="block"></div>
                </div>
            </div>

            <div>
                <p>Hot</p>
                <div className="inline">
                    <div className="block"></div>
                    <div className="block"></div>
                    <div className="block"></div>
                    <div className="block"></div>

                </div>
            </div>

            <div>
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