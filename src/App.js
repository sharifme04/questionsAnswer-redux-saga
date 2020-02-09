import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import { questionsRequest } from "./app/redux/actions/questions";
import QuestionsList from "./app/components/QuestionsList";
import Results from "./app/components/Results";

function App() {
  const dispatch = useDispatch();
  const [amount] = useState(10);
  const questions = useSelector(state => state.questions);
  let [selectedCorrect, setSelectedCorrect] = useState([]);
  let [selectedIncorrect, setSelectedIncorrect] = useState([]);
  let [correctKey, setCorrectKey] = useState([]);
  let [incorrectKey, setIncorrectKey] = useState([]);

  useEffect(() => {
    dispatch(questionsRequest(amount));
  }, [amount, dispatch]);

  const handleClick = (answer, i, question, correctAnswer) => {
    if (
      answer === questions.questions.results[i].correct_answer &&
      !correctKey.includes(i) &&
      !selectedCorrect.some(el => el[i] === answer)
    ) {
      correctKey = [...correctKey, i];
      selectedCorrect = [...selectedCorrect, { [i]: answer }];
      setSelectedCorrect(selectedCorrect);
      setCorrectKey(correctKey);
    }
    if (
      answer !== questions.questions.results[i].correct_answer &&
      !incorrectKey.includes(i) &&
      !correctKey.includes(i)
    ) {
      selectedIncorrect = [...selectedIncorrect, { [i]: answer }];
      selectedCorrect = [...selectedCorrect, { [i]: correctAnswer }];
      incorrectKey = [...incorrectKey, i];
      setSelectedIncorrect(selectedIncorrect);
      setIncorrectKey(incorrectKey);
      setSelectedCorrect(selectedCorrect);
    }
  };

  const updateResults =
    questions &&
    questions.questions &&
    questions.questions.results &&
    questions.questions.results.map(e => ({
      ...e,
      allAnswers: [...e.incorrect_answers, e.correct_answer]
    }));

  return (
    <BrowserRouter>
      <div className="container-fluid mt-1">
        <Route
          exact
          path="/"
          render={props => (
            <QuestionsList
              questions={questions && questions}
              handleClick={handleClick}
              updateResults={updateResults && updateResults}
              totalQuestions={
                updateResults && updateResults.length && updateResults.length
              }
              selectedCorrect={selectedCorrect}
              selectedIncorrect={selectedIncorrect}
              {...props}
            />
          )}
        />
        <Route
          exact
          path="/results"
          render={props => (
            <Results
              {...props}
              updateResults={updateResults && updateResults}
              selectedCorrect={selectedCorrect}
              selectedIncorrect={selectedIncorrect}
            />
          )}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
