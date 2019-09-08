import React from "react";
import { QuestionsModel } from "./models/QuestionsModel";

const Questions = props => {
  let questionsArr = QuestionsModel.map(question => {
    if (props.show[question.id] && question.id) {
      return (
        <div
          className={`question-container question-container-${question.id}`}
          key={question.id}
        >
          <h3>{`${question.id}. ${question.question} `}</h3>
          <form
            onSubmit={
              question.id === 6
                ? e => props.onClick(e, question.set, question.id)
                : e => props.onSubmit(e, question.set, question.id)
            }
          >
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

            <button
              type="submit"
              disabled={props.answers[question.set] ? false : true}
            >
              {question.id === 6 ? "Submit" : "Next"}
            </button>
            <h1>{`Updated Count: ${props.count}`}</h1>
          </form>
        </div>
      );
    } else {
      return null;
    }
  });
  return <>{questionsArr}</>;
};

export default Questions;
