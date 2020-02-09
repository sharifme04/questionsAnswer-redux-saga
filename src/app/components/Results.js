import React from "react";
import PropTypes from "prop-types";

const Results = ({
  history,
  selectedIncorrect,
  selectedCorrect,
  updateResults
}) => {
  let correctAns =
    selectedCorrect &&
    selectedIncorrect &&
    selectedCorrect.length - selectedIncorrect.length;
  return (
    <div>
      <h2>Results</h2>
      <hr />
      <div className="card text-center">
        <div className="card-header">Your Score</div>
        <div className="card-body">
          {selectedCorrect && selectedCorrect.length ? (
            <div>
              <h3 className="card-title">
                {correctAns && correctAns}/
                {updateResults && updateResults.length}
              </h3>
              <p className="card-text mb-4">Congratulation!!!!</p>
            </div>
          ) : (
            <h5 className="card-title">
              You did not select any answer. Please Go back and answer all
              questions
            </h5>
          )}
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => history.push("/")}
          >
            Back
          </button>
        </div>
        <div className="card-footer text-muted">Deevio GmbH</div>
      </div>
    </div>
  );
};
Results.propTypes = {
  selectedIncorrect: PropTypes.array,
  selectedCorrect: PropTypes.array,
  updateResults: PropTypes.array
};

export default Results;
