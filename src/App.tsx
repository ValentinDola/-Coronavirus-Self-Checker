import React from 'react';
import './App.css';
import Chat, {Button} from "./bot";
import logo from "./robot.svg";

function App() {
  const [start, setStart] = React.useState(false);

  if(start){
    return <Chat/>
  }

  return (
    <div className="Container">
      <div className="App">
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
          <img className="App-logo" src={logo} alt=""/>
          <div className="speech-bubble">
            <p>Hello, my name is Kojo!</p>
            <p>
              Welcome to the Coronavirus Self-Checker.
            </p>
          </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
          <Button onClick={() => setStart(true)}>Start Triage</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
