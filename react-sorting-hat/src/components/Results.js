import React from "react";

const Results = props => {
  return (
    <div className="result-container">
      {/* <button onClick={this.handleResults}>Results</button> */}
      <button onClick={props.onClick}>Restart</button>

      <ul>
        <li>
          {props.results.team ? `Team: ${props.results.team}` : "Team: TBD"}
        </li>
        <li>{`Traits: ${props.results.traits}`}</li>
        <li>{`Most Popular: ${props.results.popular}`}</li>
      </ul>
    </div>
  );
};

export default Results;
