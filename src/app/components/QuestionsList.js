import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import uuid from "uuid";

const QuestionsList = props => {
  const {
    questions,
    handleClick,
    selectedCorrect,
    selectedIncorrect,
    updateResults,
    totalQuestions
  } = props;

  return (
    <div className="mt-1">
      <h2>Deevio questions app</h2>
      <hr />
      {questions && questions.isLoading && questions.isLoading ? (
        <div className="text-center">
          <div className="spinner-border custom-spin text-info" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row justify-content-center">
          {updateResults && updateResults ? (
            updateResults.map((e, i) => (
              <div
                key={uuid.v4()}
                className="col-xs-12 col-sm-12 col-md-6 mt-2"
              >
                <div className="card">
                  <div className="card-body">
                    <p className="card-title">
                      <b>{e.question}</b>
                    </p>
                    {e.allAnswers.sort().map(answer => (
                      <p
                        className={`card-text text-center custom-answer
                        ${
                          selectedCorrect &&
                          selectedCorrect.some(x => x[i] === answer)
                            ? "correct-color"
                            : selectedIncorrect &&
                              selectedIncorrect.some(x => x[i] === answer)
                            ? "incorrect-color"
                            : ""
                        }`}
                        onClick={() =>
                          handleClick(answer, i, e.question, e.correct_answer)
                        }
                        key={uuid.v4()}
                      >
                        {answer}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h5> Questions are not available</h5>
          )}
          <div className="mt-3 mb-4">
            <hr />
            {totalQuestions && (
              <Link to="/results">
                <button
                  type="button"
                  className="btn btn-success"
                  disabled={selectedCorrect.length !== totalQuestions}
                >
                  {selectedCorrect.length !== totalQuestions
                    ? "Please answer all question to go Next"
                    : "Submit Now!!"}
                </button>
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

QuestionsList.propTypes = {
  props: PropTypes.object,
  questions: PropTypes.object,
  selectedIncorrect: PropTypes.array,
  selectedCorrect: PropTypes.array,
  updateResults: PropTypes.array,
  handleClick: PropTypes.func
};

export default QuestionsList;
