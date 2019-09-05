import React, { Component } from "react";
import Hat from "./assets/the_sorting_hat_by_sahinduezguen.png";
import "./App.scss";
import Welcome from "./components/Welcome";
import Questions from "./components/questions/Questions";
import Results from "./components/Results";

const initialState = {
  count: 0,
  questions: false,
  answers: {},
  results: {},
  show: {
    1: true,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false
  },
  showResults: false
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      ...initialState
    };
    this.enterRef = React.createRef();
  }

  handleHoverEnter = () => {
    this.enterRef.current.classList = "enterRef";
  };

  handleHoverLeave = () => {
    this.enterRef.current.classList = "exitRef";
  };

  handleWelcomeClick = () => {
    this.setState({
      questions: !this.state.questions
    });
  };

  handleAnswerChange = (e, set) => {
    this.setState({
      answers: {
        ...this.state.answers,
        [set]: e.target.value
      }
    });
  };

  handleSubmit = (e, set, id) => {
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

    this.setState({
      show: {
        ...this.state.show,
        [id]: !this.state.show[id],
        [id + 1]: !this.state.show[id + 1]
      }
    });
  };

  handleResults = (e, set, id) => {
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

    if (updatedCount < 13) {
      this.setState({
        results: {
          team: "Team 1",
          traits: ["one", "two", "three"],
          popular: "Most Popular Character"
        }
      });
    } else if (12 < updatedCount && updatedCount < 17) {
      this.setState({
        results: {
          team: "Team 2",
          traits: ["one", "two", "three"],
          popular: "Most Popular Character"
        }
      });
    } else if (16 < updatedCount && updatedCount < 21) {
      this.setState({
        results: {
          team: "Team 3",
          traits: ["one", "two", "three"],
          popular: "Most Popular Character"
        }
      });
    } else if (updatedCount > 20) {
      this.setState({
        results: {
          team: "Team 4",
          traits: ["one", "two", "three"],
          popular: "Most Popular Character"
        }
      });
    } else {
      return null;
    }

    this.setState({
      show: {
        ...this.state.show,
        [id]: !this.state.show[id],
        [id + 1]: !this.state.show[id + 1]
      },
      showResults: true
    });
  };

  handleReset = () => {
    this.setState({
      ...initialState
    });
  };

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
        {!this.state.questions ? (
          <Welcome
            onMouseEnter={this.handleHoverEnter}
            onMouseLeave={this.handleHoverLeave}
            hat={Hat}
            ref={this.enterRef}
            onClick={this.handleWelcomeClick}
          />
        ) : !this.state.showResults ? (
          <Questions
            count={this.state.count}
            answers={this.state.answers}
            onChange={this.handleAnswerChange}
            onSubmit={this.handleSubmit}
            show={this.state.show}
            onClick={this.handleResults}
          />
        ) : (
          <Results onClick={this.handleReset} results={this.state.results} />
        )}
      </div>
    );
  }
}

export default App;
