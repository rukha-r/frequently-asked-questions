import React, { useState } from "react";
import "./App.scss";

function QuestionBox({ question, answer }) {
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow(!show);
  };
  return (
    <div className="main-wrapper">
      <div className="question">
        <h4 onClick={toggleShow}>{question}</h4>
      </div>
      <p className="answer" style={{ display: show ? "block" : "none" }}>
        {answer}
      </p>
    </div>
  );
}

export default QuestionBox;
