import React from "react";
import data from "./data";
import "./App.scss";
import QuestionBox from "./QuestionBox";

function App() {
  return (
    <div className="main">
      <h1>FAQ</h1>
      <hr />
      <div className="main-body">
        <div className="body">
          <div className="frq-part"></div>
          <div class="title-part">
            <br />
            {data.map((data) => (
              <QuestionBox question={data.question} answer={data.answer} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
