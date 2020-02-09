import React from "react";
import { shallow } from "enzyme";
import QuestionsList from "../QuestionsList";

jest.mock("uuid", () => {
  return {
    v4: jest.fn(() => 1)
  };
});

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
const updateResults = [
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "easy",
    question:
      "Who played Deputy Marshal Samuel Gerard in the 1993 film &quot;The Fugitive&quot;?",
    correct_answer: "Tommy Lee Jones",
    incorrect_answers: ["Harrison Ford", "Harvey Keitel", "Martin Landau"],
    allAnswers: [
      "Harrison Ford",
      "Harvey Keitel",
      "Martin Landau",
      "Tommy Lee Jones"
    ]
  }
];

describe("<QuestionsList />", () => {
  test("renders", () => {
    const component = shallow(<QuestionsList updateResults={updateResults} questions={fakeQuestions} handleClick={() => {}} />);
    expect(component).toMatchSnapshot();
  });

  test("return the default array when there is no data to map through", () => {
    const component = shallow(<QuestionsList />);
    expect(component).toMatchSnapshot();
  });

  test("does not break without value", () => {
    const component = shallow(<QuestionsList />);
    expect(component.find("h5")).toHaveLength(1);
    expect(component.find("p")).toHaveLength(0);
  });

  test("does not break with an empty array", () => {
    const component = shallow(<QuestionsList results={[]} />);
    expect(component.find("h5")).toHaveLength(1);
    expect(component.find("p")).toHaveLength(0);
  });
});
