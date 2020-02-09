import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import App from "./App";

const mockStore = configureMockStore();
const store = mockStore({});
const fakeQuestions = {
  isLoading: false,
  questions: {
    response_code: 0,
    results: [
      {
        category: "Entertainment: Film",
        type: "multiple",
        difficulty: "easy",
        question:
          "Who played Deputy Marshal Samuel Gerard in the 1993 film &quot;The Fugitive&quot;?",
        correct_answer: "Tommy Lee Jones",
        incorrect_answers: ["Harrison Ford", "Harvey Keitel", "Martin Landau"]
      }
    ]
  }
};

test("should render initial layout", () => {
  const component = shallow(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    </Provider>
  );
  expect(component.exists()).toBe(true);
});

test("snapshot data renders", () => {
  const component = renderer.create(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/"]}>
        <App questions={fakeQuestions} />
      </MemoryRouter>
    </Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("snapshot renders", () => {
  const component = renderer.create(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    </Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
