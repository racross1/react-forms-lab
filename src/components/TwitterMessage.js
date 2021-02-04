import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleChange = (e) => {
    console.log(this.state.charsLeft)
    let charsLeft = this.props - e.target.value.length
    this.setState({
      message: e.target.value
    })
  }

  render() {
    let charsLeft = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input value={this.state.message} onChange={e => this.handleChange(e)} type="text" name="message" id="message" />
        <br></br>
        <span>{charsLeft} characters left!</span>
      </div>
    );
  }
}

export default TwitterMessage;
