import logo from './logo.svg';
import './App.css';
import Signin from './components/Signin';
import Signup from './components/Signup';
import OTPModal from './components/OTPModal';
import React from 'react';


class App extends React.Component{

  constructor(){
    super();
    this.state={verified:false, name:""};
    this.verify=this.verify.bind(this);
    this.setName=this.setName.bind(this);
  }

  componentDidMount(){
  }

  verify(verified){
    this.setState({verified:verified})
  }

  setName(name){
    this.setState({name:name})
  }

  render(){
    let modal1=<Signin state={this.state} setName={this.setName}/>;
    let modal2=<Signup state={this.state} setName={this.setName}/>;
    let otpmodal=<OTPModal state={this.state} verify={this.verify}/>
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="Account">
            {!this.state.verified?modal1:""}
            {!this.state.verified?modal2:""}
        </div>
        {!this.state.verified?otpmodal:""}
      </div>
    );
  }
}

export default App;
