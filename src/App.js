import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form1 from './form1';
import Form2 from './form2';

class App extends Component {

  state = {
    form1: true,
    form2: false,
    id: false,
    page: 0,
    data: {

    }
  }


  ref1 = React.createRef()
  ref2 = React.createRef()
  ref3 = React.createRef()
  anime = React.createRef()

  changeForm(){
  
    if(this.state.page == 0){
      this.ref1.current.classList.remove("current");
      this.ref2.current.classList.add("current");
      this.setState({form1: false, form2: true,page: 1});
    }else if(this.state.page == 1){
      this.ref2.current.classList.remove("current");
      this.ref3.current.classList.add("current");
      setTimeout(()=>{
        this.anime.current.classList.remove("small");
        this.anime.current.classList.add("large");
      },100);
      
      this.setState({form2: false, id: true,page: 2});
      console.log(this.state.data);
      var v = new XMLHttpRequest();
      v.open("POST","http://localhost:3000/tfbc/onboardInvestor");
      v.send(this.state.data);
    }
  }

  backForm(){
    if(this.state.page == 1){
      this.ref1.current.classList.add("current");
      this.ref2.current.classList.remove("current");
      this.setState({form1: true, form2: false,page: 0});
    }
  }

  render() {
    return (
      <div className="App">
        <p>Onboarding</p>
          <div class="hello">
            <div class="breadcrumb">
              <ul>
                <li ref={this.ref1} className="current"><p>Personal Details</p></li>
                <li ref={this.ref2}><p>KYC</p></li>
                <li ref={this.ref3}><p>Your Id</p></li>
              </ul>
              <form>
                {
                  this.state.form1 && <Form1 data={((d)=>this.setState({data:Object.assign(this.state.data,d)})).bind(this)} />
                }
                {
                  this.state.form2 && <Form2 />
                }
                {
                  this.state.id && <div>
                    <div class="done small" ref={this.anime}></div>
                    <p class="animate">Your Profile has been created</p>
                  </div>
                }

                <div className="inline">
                {
                  this.state.page > 0 && this.state.page < 2 && <button class="btn" type="button" onClick={()=>this.backForm.bind(this)(this.state.page)}>Before</button>
                  
                }
                { this.state.page < 2 && <button class="btn" type="button" onClick={()=>this.changeForm.bind(this)()}>Next</button>}
                </div>
              </form>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
