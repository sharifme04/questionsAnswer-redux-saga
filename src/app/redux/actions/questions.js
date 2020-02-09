import {
  FETCH_QUESTIONS_REQUESTED,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_FAILURE
} from "../actionType/questionsType";

export const questionsRequest = amount => ({
  type: FETCH_QUESTIONS_REQUESTED,
  amount
});

export const questionsSuccess = questions => ({
  type: FETCH_QUESTIONS_SUCCESS,
  questions
});

export const questionsFail = error => ({
  type: FETCH_QUESTIONS_FAILURE,
  error
});
