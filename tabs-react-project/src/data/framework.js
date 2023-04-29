import { Component } from "react";
import frameworks from "./data/frameworks";

import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: frameworks,
      titleOfTheButtonCliked: null,
      description: "",
      img: ""
    };
  }

  saveTheButtonThatWasClicked = ({ title, description, img }) => {
    this.setState({
      titleOfTheButtonCliked: title,
      description: description,
      img: img
    });
  };

  render() {
    return (
      <div className="App">
        <h2> this is my app</h2>
        <button
          onClick={() => this.saveTheButtonThatWasClicked(this.state.data[0])}
          className={
            this.state.titleOfTheButtonCliked === this.state.data[0].title
              ? "active"
              : null
          }
        >
          {this.state.data[0].title}
        </button>
        <button
          onClick={() => this.saveTheButtonThatWasClicked(this.state.data[1])}
          className={
            this.state.titleOfTheButtonCliked === this.state.data[1].title
              ? "active"
              : null
          }
        >
          {this.state.data[1].title}
        </button>
        <button
          onClick={() => this.saveTheButtonThatWasClicked(this.state.data[2])}
          className={
            this.state.titleOfTheButtonCliked === this.state.data[2].title
              ? "active"
              : null
          }
        >
          {this.state.data[2].title}
        </button>
        <p>{this.state.description}</p>
        <img src={this.state.img} alt={this.state.titleOfTheButtonCliked} />
      </div>
    );
  }
}
export default App;
