import React from "react";
import { Link } from "react-router-dom";

const Results = props => {
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
        <h2
          style={{
            color:
              props.results.team === "Slytherin House"
                ? "#287233"
                : props.results.team === "Gryffindor House"
                ? "#560319"
                : props.results.colours[0],
            textTransform: "uppercase",
            letterSpacing: "1px"
          }}
        >
          {props.results.team ? `${props.results.team}` : "Team: TBD"}
        </h2>
        <ul>
          <li
            style={{ textTransform: "capitalize" }}
          >{`Traits: ${props.results.traits}`}</li>
          <li>{`Most Popular: ${props.results.popular}`}</li>
        </ul>

        <Link to="/welcome">
          <button
            onClick={props.onClick}
            style={{
              color:
                props.results.team === "Hufflepuff House" ? "white" : "initial"
            }}
          >
            Restart
          </button>
        </Link>
      </div>
    </>
  );
};

export default Results;
