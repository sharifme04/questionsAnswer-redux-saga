import {
  FETCH_QUESTIONS_REQUESTED,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_FAILURE
} from "../actionType/questionsType";

const initialState = {
  questions: null,
  error: null
};

export default function questions(state = initialState, action) {
  switch (action.type) {
    case FETCH_QUESTIONS_REQUESTED:
      return {
        isLoading: true
      };
    case FETCH_QUESTIONS_SUCCESS:
      return {
        ...state,
        questions: action.questions,
        isLoading: false
      };
    case FETCH_QUESTIONS_FAILURE:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
}
