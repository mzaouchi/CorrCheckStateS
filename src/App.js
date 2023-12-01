import React from 'react';
import './App.css';
import Profil from './Components/Profil';


class App extends React.Component{
  constructor(){
    super()
    this.state={
      show : false
    }
  }
  render(){
    return(
      <div>
        <h1>Correction Checkpoint State</h1>
        <button onClick={()=> this.setState({show : !this.state.show})}>Show</button>
        {
          this.state.show  && <Profil/>
        }
        
      </div>
    )
  }
}

export default App;
