import axios from "axios";

const API_END_POINT = process.env.REACT_APP_QUESTIONS_API;

export const api = {
  fetchData(action) {
    return axios
      .get(`${API_END_POINT}amount=${action.amount}`)
      .then(response => ({ questions: response.data }))
      .catch(error => ({ error }));
  }
};
