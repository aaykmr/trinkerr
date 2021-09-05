import logo from './logo.svg';
import './App.css';
import Signin from './components/Signin';
import Signup from './components/Signup';
import OTPModal from './components/OTPModal';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="Account">
        <Signin />
        <Signup />
      </div>
      <OTPModal />
    </div>
  );
}

export default App;
