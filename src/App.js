import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Values from "./components/Values"
import ChooseAnswer from "./components/ChooseAnswer"



class App extends Component {
  
  vals(){
  return Math.floor(Math.random() * 100)
  }
 getValues(){
    const value1 = this.vals()
    const value2 = this.vals()
    const value3 = this.vals()
    const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3 
    return {
      "value1" : value1,
      "value2" : value2,
      "value3" : value3,
      "proposedAnswer" : proposedAnswer,
    }
  }
  initial = this.getValues()

  state = {
    
    "numQuestions" : 0,
    "numCorrect" : 0,
    "value1" : this.initial.value1,
    "value2" : this.initial.value2,
    "value3" : this.initial.value3,
    "proposedAnswer" : this.initial.proposedAnswer
  }

  updatePoints=(response)=>{
    if (response==="True"){
    this.setState((currentState)=>({   
      numQuestions : currentState.numQuestions+1,
      numCorrect : currentState.proposedAnswer === currentState.value1+currentState.value2+currentState.value3 ? currentState.numCorrect+1 : currentState.numCorrect
    })
    )}
    else{
      this.setState((currentState)=>({   
      numQuestions : currentState.numQuestions+1,
      numCorrect : currentState.proposedAnswer !== currentState.value1+currentState.value2+currentState.value3 ? currentState.numCorrect+1 : currentState.numCorrect
    })
    )
    }
    
  }

  updateValues=()=>{
    const updated = this.getValues()
    this.setState((currentState)=>({   
      value1 : updated.value1,
      value2 : updated.value2,
      value3 : updated.value3,
      proposedAnswer : updated.proposedAnswer
      
    })
    )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
    		<Values value1 = {this.state.value1} value2 = {this.state.value2} value3 = {this.state.value3} proposedAnswer = {this.state.proposedAnswer} />
          </div>
		  <ChooseAnswer numQuestions = {this.state.numQuestions} numCorrect = {this.state.numCorrect} onUpdatePoints = {this.updatePoints} onUpdateValues = {this.updateValues}/>   
        </div>
      </div>
    );
  }
}

export default App;
