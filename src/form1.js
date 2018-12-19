import * as React from 'react';


export default class Form1 extends React.Component{
    render(){
        return <div>
                <label>Username</label><br/>
                <input type="text" onChange={(e)=>this.props.data({userName: e.nativeEvent.target.value})}/><br/>
                <label>First Name</label><br/>
                <input type="text" onChange={(e)=>this.props.data({userFName:e.nativeEvent.target.value})}/><br/>
                <label>Last Name</label><br/>
                <input type="text" onChange={(e)=>this.props.data({userLName:e.nativeEvent.target.value})}/><br/>
        </div>
    }
}