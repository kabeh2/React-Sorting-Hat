import React, { Component } from "react";
import Hat from "./assets/the_sorting_hat_by_sahinduezguen.png";
import "./App.scss";
import Welcome from "./components/Welcome";
import Questions from "./components/questions/Questions";

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      answers: {},
      results: {}
    };
    this.enterRef = React.createRef();
  }

  handleHoverEnter = () => {
    this.enterRef.current.classList = "enterRef";
  };

  handleHoverLeave = () => {
    this.enterRef.current.classList = "exitRef";
  };

  handleAnswerChange = (e, set) => {
    this.setState({
      answers: {
        ...this.state.answers,
        [set]: e.target.value
      }
    });
  };

  handleSubmit = (e, set) => {
    e.preventDefault();

    let updatedCount = this.state.count;

    switch (this.state.answers[set]) {
      case "a":
        this.setState({
          count: (updatedCount += 1)
        });
        break;
      case "b":
        this.setState({
          count: (updatedCount += 2)
        });
        break;
      case "c":
        this.setState({
          count: (updatedCount += 3)
        });
        break;
      case "d":
        this.setState({
          count: (updatedCount += 4)
        });
        break;
      default:
        return null;
    }
  };

  handleResults = () => {
    switch (this.state.count) {
      case this.state.count < 13:
        this.setState({
          results: {
            team: "Team 1",
            traits: ["one", "two", "three"],
            popular: "Most Popular Character"
          }
        });
        break;
      case 12 < this.state.count < 17:
        this.setState({
          results: {
            team: "Team 2",
            traits: ["one", "two", "three"],
            popular: "Most Popular Character"
          }
        });
        break;
      case 16 < this.state.count < 21:
        this.setState({
          results: {
            team: "Team 3",
            traits: ["one", "two", "three"],
            popular: "Most Popular Character"
          }
        });
        break;
      case this.state.count > 20:
        this.setState({
          results: {
            team: "Team 4",
            traits: ["one", "two", "three"],
            popular: "Most Popular Character"
          }
        });
        break;
      default:
        return null;
    }
  };

  // setCount =

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState);
  }

  componentDidMount() {
    // console.log(this.enterRef);
    console.log(this.state.answers);
  }

  render() {
    return (
      <div className="App">
        {/* <Welcome
          onMouseEnter={this.handleHoverEnter}
          onMouseLeave={this.handleHoverLeave}
          hat={Hat}
          ref={this.enterRef}
        /> */}

        <Questions
          count={this.state.count}
          answers={this.state.answers}
          onChange={this.handleAnswerChange}
          onSubmit={this.handleSubmit}
        />
        <button onClick={this.handleResults}>Results</button>
        {this.state.results && (
          <ul>
            <li>{this.state.results.team}</li>
            <li>{this.state.results.traits}</li>
            <li>{this.state.results.popular}</li>
          </ul>
        )}
      </div>
    );
  }
}

export default App;
