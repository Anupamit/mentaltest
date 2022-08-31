import React, { useState } from "react";
import "./styles/Qus.css";
import Result from "./Result";

import q1 from "./img/q1.svg";
import q1o1 from "./img/q1o1.svg";
import q1o2 from "./img/q1o2.svg";
import q1o3 from "./img/q1o3.svg";
import q1o4 from "./img/q1o4.svg";
import q1o5 from "./img/q1o5.svg";
import q1o6 from "./img/q1o6.svg";

import q2 from "./img/q2.svg";
import q2o1 from "./img/q2o1.svg";
import q2o2 from "./img/q2o2.svg";
import q2o3 from "./img/q2o3.svg";
import q2o4 from "./img/q2o4.svg";
import q2o5 from "./img/q2o5.svg";
import q2o6 from "./img/q2o6.svg";

import q3 from "./img/q3.svg";
import q3o1 from "./img/q3o1.svg";
import q3o2 from "./img/q3o2.svg";
import q3o3 from "./img/q3o3.svg";
import q3o4 from "./img/q3o4.svg";
import q3o5 from "./img/q3o5.svg";
import q3o6 from "./img/q3o6.svg";

import q4 from "./img/q4.svg";
import q4o1 from "./img/q4o1.svg";
import q4o2 from "./img/q4o2.svg";
import q4o3 from "./img/q4o3.svg";
import q4o4 from "./img/q4o4.svg";
import q4o5 from "./img/q4o5.svg";
import q4o6 from "./img/q4o6.svg";

import q5 from "./img/q5.svg";
import q5o1 from "./img/q5o1.svg";
import q5o2 from "./img/q5o2.svg";
import q5o3 from "./img/q5o3.svg";
import q5o4 from "./img/q5o4.svg";
import q5o5 from "./img/q5o5.svg";
import q5o6 from "./img/q5o6.svg";

const questionList = [
  {
    questionImage: q1,
    questionText:
      "1. Which shape should be in the rightmost cell with a question mark?",
    questionOptions: [q1o1, q1o2, q1o3, q1o4, q1o5, q1o6],
    answer: q1o5
  },
  {
    questionImage: q2,
    questionText:
      "2. Which shape should be in the rightmost cell with a question mark?",
    questionOptions: [q2o1, q2o2, q2o3, q2o4, q2o5, q2o6],
    answer: q2o3
  },
  {
    questionImage: q3,
    questionText:
      "3. Which shape should be in the rightmost cell with a question mark?",
    questionOptions: [q3o1, q3o2, q3o3, q3o4, q3o5, q3o6],
    answer: q3o5
  },
  {
    questionImage: q4,
    questionText:
      "4. Which shape should be in the rightmost cell with a question mark?",
    questionOptions: [q4o1, q4o2, q4o3, q4o4, q4o5, q4o6],
    answer: q4o6
  },
  {
    questionImage: q5,
    questionText:
      "5. Which shape should be in the rightmost cell with a question mark?",
    questionOptions: [q5o1, q5o2, q5o3, q5o4, q5o5, q5o6],
    answer: q5o4
  }
];
const backHome = () => {
  window.location.href = "/";
};
function Qus() {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const currentQuestion = questionList[activeQuestion];

  const { questionImage, questionText, questionOptions } =
    currentQuestion || "";
  return (
    <div>
      <div className="icon-end">
        <button onClick={backHome} className="icon">
          X
        </button>
      </div>
      <div className="quscontainer">
        {activeQuestion < questionList.length ? (
          <>
            <img src={questionImage} alt="Logo" className="img" />
            <span>
              <h2 className="qustext">{questionText}</h2>
            </span>
            <div className="inline-list">
              {questionOptions?.map((question) => (
                <img
                  onClick={() => {
                    setActiveQuestion(activeQuestion + 1);
                  }}
                  src={question}
                  alt="Logo"
                  className="img"
                />
              ))}
            </div>
          </>
        ) : (
          <Result />
        )}
      </div>
    </div>
  );
}

export default Qus;
