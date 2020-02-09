import { call, put, takeLatest } from "redux-saga/effects";
import { FETCH_QUESTIONS_REQUESTED } from "../actionType/questionsType";
import { questionsSuccess, questionsFail } from "../actions/questions";
import { api } from "../services/services";

function* fetchQuestions(action) {
  const { questions, error } = yield call(api.fetchData, action);
  if (questions) yield put(questionsSuccess(questions));
  else yield put(questionsFail(error));
}

export default function* watchFetchData() {
  yield takeLatest(FETCH_QUESTIONS_REQUESTED, fetchQuestions);
}
