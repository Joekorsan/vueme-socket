import React, {Component} from 'react'


class InputMessage extends Component {
  state = {
    message:''
  }

  submitHandler = (event) =>{
    console.log('working!')
    event.preventDefault();
    this.props.addMessage(this.state.message)
  }




  render(){


    return(
      <div>
        <form onSubmit={(e) => this.submitHandler(e)}>
          <input
            type="text"
            value={this.state.message}
            onChange={e => this.setState({message:e.target.value})}
          />

        </form>
      </div>
    )
  }


}

export default InputMessage
