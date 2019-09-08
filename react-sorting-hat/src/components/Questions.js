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
              {question.answers.map(answer => {
                return (
                  <li>
                    <label>
                      <input
                        name="radioGroup"
                        type="radio"
                        value={answer.value}
                        checked={props.answers[question.set] === answer.value}
                        onChange={e => props.onChange(e, question.set)}
                      />
                      {answer.answer}
                    </label>
                  </li>
                );
              })}
            </ul>

            <button
              type="submit"
              disabled={props.answers[question.set] ? false : true}
            >
              {question.id === 6 ? "Submit" : "Next"}
            </button>
            {/* Below code is to help calculate total count of each answer */}
            {/* <h1>{`Updated Count: ${props.count}`}</h1> */}
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
