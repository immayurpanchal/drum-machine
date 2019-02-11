import React, { Component } from "react";
import "./DrumPad.css";

class DrumPad extends Component {
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeydown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeydown);
  }

  handleKeydown = event => {
    if (event.keyCode === this.props.letter.charCodeAt()) {
      this.audio.play();
      this.props.handleDisplay();
    }
  };


  handleClick() {
    this.props.handleDisplay();
    this.audio.play();
  }

  render() {
    return (
      <div
        className="drum-pad d-flex-row align-items-center shadow btn btn-primary"
        id={this.props.id}
        onClick={this.handleClick.bind(this)}
      >
        <h1>{this.props.letter}</h1>
        <audio id={this.props.letter} className="clip" src={this.props.src} ref={ref => this.audio = ref}/>
      </div>
    );
  }
}

export default DrumPad;
