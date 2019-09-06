import React from "react";

const Results = React.forwardRef((props, ref) => {
  return (
    <>
      <div className="crest-container">
        <img src={props.results.crest} alt="Team Crest" />
      </div>
      <div
        className="result-container"
        style={{
          backgroundColor: props.results.colours[1],
          color: props.results.team === "Hufflepuff House" ? "white" : "initial"
        }}
      >
        <h3>Congratulations! You are on Team:</h3>
        <h2>{props.results.team ? `${props.results.team}` : "Team: TBD"}</h2>
        <ul>
          {/* <li>
            {props.results.team ? `Team: ${props.results.team}` : "Team: TBD"}
          </li> */}
          <li
            style={{ textTransform: "capitalize" }}
          >{`Traits: ${props.results.traits}`}</li>
          <li>{`Most Popular: ${props.results.popular}`}</li>
        </ul>

        <button
          onClick={props.onClick}
          style={{
            color:
              props.results.team === "Hufflepuff House" ? "white" : "initial"
          }}
        >
          Restart
        </button>
      </div>
    </>
  );
});

export default Results;
