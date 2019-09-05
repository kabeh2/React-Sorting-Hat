import React from "react";
import { QuestionsModel } from "./QuestionsModel";

const Questions = props => {
  let questionsArr = QuestionsModel.map(question => {
    return (
      <div key={question.id}>
        <h3>{`${question.id}. ${question.question} `}</h3>
        <form onSubmit={e => props.onSubmit(e, question.set)}>
          <ul>
            <li>
              <label>
                <input
                  name="radioGroup"
                  type="radio"
                  value="a"
                  checked={
                    props.answers[question.set] === question.answers[0].value
                  }
                  onChange={e => props.onChange(e, question.set)}
                />
                {question.answers[0].answer}
              </label>
            </li>

            <li>
              <label>
                <input
                  name="radioGroup"
                  type="radio"
                  value="b"
                  checked={
                    props.answers[question.set] === question.answers[1].value
                  }
                  onChange={e => props.onChange(e, question.set)}
                />
                {question.answers[1].answer}
              </label>
            </li>

            <li>
              <label>
                <input
                  name="radioGroup"
                  type="radio"
                  value="c"
                  checked={
                    props.answers[question.set] === question.answers[2].value
                  }
                  onChange={e => props.onChange(e, question.set)}
                />
                {question.answers[2].answer}
              </label>
            </li>

            <li>
              <label>
                <input
                  name="radioGroup"
                  type="radio"
                  value="d"
                  checked={
                    props.answers[question.set] === question.answers[3].value
                  }
                  onChange={e => props.onChange(e, question.set)}
                />
                {question.answers[3].answer}
              </label>
            </li>
          </ul>

          <button type="submit">Make your choice</button>
          <h1>{`Updated Count - ${props.count}`}</h1>
        </form>
      </div>
    );
  });
  return (
    <>
      {questionsArr}
      {/* <button type="submit" onSubmit={(e) => props.onSubmit(e, set)}>
        Make your choice
      </button> */}
    </>
  );
};

export default Questions;
