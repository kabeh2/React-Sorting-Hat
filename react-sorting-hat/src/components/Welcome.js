import React from "react";
import { Link } from "react-router-dom";

const Welcome = React.forwardRef((props, ref) => {
  return (
    <div className="welcome-container">
      <h1>Welcome to the Great Hall of Hogwarts!</h1>
      <div
        className="sorting-hat--container"
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
      >
        <img className="sorting-hat" src={props.hat} alt="Sorting Hat" />
        <Link to={`/questions/${props.location.key}`}>
          <button className="exitRef btn" ref={ref} onClick={props.onClick}>
            <h2>Click to Find Out Your House...</h2>
          </button>
        </Link>
      </div>
    </div>
  );
});

export default Welcome;
