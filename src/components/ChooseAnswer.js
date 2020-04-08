import React,{Component} from "react"

class ChooseAnswer extends Component{
	render(){
      console.log(this.props)		
      return(
        <div>
          <button id = "True" onClick = {()=>{this.props.onUpdatePoints(this.id);this.props.onUpdateValues()}}>True</button>
          <button id = "False"  onClick = {()=>{this.props.onUpdatePoints(this.id);this.props.onUpdateValues()}}>False</button>
		  <p className="text">
            Your Score: {this.props.numCorrect}/{this.props.numQuestions}
          </p>
        </div>
      )
    }
}

export default ChooseAnswer