import React, { useContext } from "react";
import DataContext from "../context/dataContext";

const Quiz = () => {
  const {
    showQuiz,
    question,
    quizs,
    checkAnswer,
    correctAnswer,
    selectedAnswer,
    questionIndex,
    nextQuestion,
    showTheResult,
  } = useContext(DataContext);

  return (
    <section
      className="text-white"
      style={{
        background: "#172429",
        display: `${showQuiz ? "block" : "none"}`,
      }}
    >
      <div className="container">
        <div className="row vh-100 align-items-center justify-content-center">
          <div className="col-lg-8">
            <div className="card p-4" style={{ background: "#2c7977" }}>
              <div className="d-flex justify-content-between gap-md-3">
                <h5 className="mb-2 text-white fs-normal lh-base">
                  {question?.question}
                </h5>
                <h5
                  style={{
                    color: "#def2f1",
                    width: "100px",
                    textAlign: "right",
                  }}
                >
                  {quizs.indexOf(question) + 1} / {quizs?.length}
                </h5>
              </div>
              <div>
                {question?.options?.map((item, index) => (
                  <button
                    key={index}
                    className={`option w-100 text-start btn text-white py-2 px-3 mt-3 rounded border-0 btn-dark ${
                      correctAnswer === item && "bg-success"
                    }`}
                    onClick={(event) => checkAnswer(event, item)}
                  >
                    {item}
                  </button>
                ))}
              </div>

              {questionIndex + 1 !== quizs.length ? (
                <button
                  style={{ background: "#3aaeaa" }}
                  className="btn py-2 w-100 mt-3 text-light fw-bold"
                  onClick={nextQuestion}
                  disabled={!selectedAnswer}
                >
                  Next Question
                </button>
              ) : (
                <button
                  style={{ background: "#3aaeaa" }}
                  className="btn py-2 w-100 mt-3 text-light fw-bold"
                  onClick={showTheResult}
                  disabled={!selectedAnswer}
                >
                  Show Result
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quiz;
