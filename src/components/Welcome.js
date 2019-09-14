import React from "react";
import { Link } from "react-router-dom";

const Welcome = React.forwardRef(
  ({ onMouseEnter, onMouseLeave, hat, location, onClick, mode }, ref) => {
    return (
      <div className="welcome-container">
        <h1>Welcome to the Great Hall of Hogwarts!</h1>
        <div
          className="sorting-hat--container"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <img className="sorting-hat" src={hat} alt="Sorting Hat" />
          <Link to={`/questions/${location.key}`}>
            <button
              className={mode === "mobile" ? "btn" : "exitRef btn"}
              ref={ref}
              onClick={onClick}
            >
              <h2>Find Out Your House...</h2>
            </button>
          </Link>
        </div>
      </div>
    );
  }
);

export default Welcome;
