import { call } from "redux-saga/effects";
import watchFetchData from "./questionsSaga";

export default function* rootSaga() {
  yield call(watchFetchData);
}
