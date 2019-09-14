import React from "react";
import { Link } from "react-router-dom";

const Results = ({ results, onClick }) => {
  return (
    <>
      <div className="crest-container">
        <img src={results.crest} alt="Team Crest" />
      </div>
      <div
        className="result-container"
        style={{
          backgroundColor: results.colours[1],
          color: results.team === "Hufflepuff House" ? "white" : "initial"
        }}
      >
        <h3>Congratulations! You are on Team:</h3>
        <h2
          style={{
            color:
              results.team === "Slytherin House"
                ? "#287233"
                : results.team === "Gryffindor House"
                ? "#560319"
                : results.colours[0],
            textTransform: "uppercase",
            letterSpacing: "1px"
          }}
        >
          {results.team ? `${results.team}` : "Team: TBD"}
        </h2>
        <ul>
          <li
            style={{ textTransform: "capitalize" }}
          >{`Traits: ${results.traits}`}</li>
          <li>{`Most Popular: ${results.popular}`}</li>
        </ul>

        <Link to="/welcome">
          <button
            onClick={onClick}
            style={{
              color: results.team === "Hufflepuff House" ? "white" : "initial"
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
