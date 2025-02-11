import React from "react";
import { QuestionsModel } from "./models/QuestionsModel";

const Questions = ({ show, answers, onClick, onSubmit, onChange }) => {
  let questionsArr = QuestionsModel.map(question => {
    if (show[question.id] && question.id) {
      return (
        <div
          className={`question-container question-container-${question.id}`}
          key={question.id}
        >
          <h3>{`${question.id}. ${question.question} `}</h3>
          <form
            onSubmit={
              question.id === 6
                ? e => onClick(e, question.set, question.id)
                : e => onSubmit(e, question.set, question.id)
            }
          >
            <ul className="answer-container">
              {question.answers.map((answer, index) => {
                return (
                  <li key={index}>
                    <label>
                      <input
                        name="radioGroup"
                        type="radio"
                        value={answer.value}
                        checked={answers[question.set] === answer.value}
                        onChange={e => onChange(e, question.set)}
                      />
                      {answer.answer}
                    </label>
                  </li>
                );
              })}
            </ul>

            <button
              type="submit"
              disabled={answers[question.set] ? false : true}
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
