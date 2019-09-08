import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Hat from "./assets/the_sorting_hat_by_sahinduezguen.png";
import "./App.scss";
import Welcome from "./components/Welcome";
import Questions from "./components/Questions";
import Results from "./components/Results";
import { ResultsModel } from "./components/models/ResultsModel";

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
    this.appRef = React.createRef();
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

    // Have to update count again as the last question only has
    // one submit button so user can click once and get their answer
    // instead of click button to update then click button for results
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

    if (updatedCount < 12) {
      this.setState({
        results: ResultsModel.Hufflepuff
      });
      // Change styling to selected team colours
      this.appRef.current.classList = "App App_team--1";
    } else if (11 < updatedCount && updatedCount < 17) {
      this.setState({
        results: ResultsModel.Ravenclaw
      });
      // Change styling to selected team colours
      this.appRef.current.classList = "App App_team--2";
    } else if (16 < updatedCount && updatedCount < 21) {
      this.setState({
        results: ResultsModel.Slytherin
      });
      // Change styling to selected team colours
      this.appRef.current.classList = "App App_team--3";
    } else if (updatedCount > 20) {
      this.setState({
        results: ResultsModel.Gryffindor
      });
      // Change styling to selected team colours
      this.appRef.current.classList = "App App_team--4";
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
    this.appRef.current.classList = "App";
  };

  render() {
    const {
      questions,
      showResults,
      count,
      answers,
      show,
      results
    } = this.state;

    return (
      <div className="App" ref={this.appRef}>
        <Switch>
          {!questions ? (
            <Route
              path="/welcome"
              render={props => (
                <Welcome
                  onMouseEnter={this.handleHoverEnter}
                  onMouseLeave={this.handleHoverLeave}
                  hat={Hat}
                  ref={this.enterRef}
                  onClick={this.handleWelcomeClick}
                  {...props}
                />
              )}
            />
          ) : !showResults ? (
            <Questions
              count={count}
              answers={answers}
              onChange={this.handleAnswerChange}
              onSubmit={this.handleSubmit}
              show={show}
              onClick={this.handleResults}
            />
          ) : (
            <Results onClick={this.handleReset} results={results} />
          )}
          <Redirect to="/welcome" />
        </Switch>
      </div>
    );
  }
}

export default App;
