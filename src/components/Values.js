import React, {Component} from "react"

class Values extends Component{
  
  render(){
    console.log(this.props)
  	return(
    	<p className="text">{this.props.value1} + {this.props.value2} + {this.props.value3} = {this.props.proposedAnswer}</p> 
  	)
  }
}

export default Values