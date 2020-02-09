import React from "react";
import { shallow } from "enzyme";
import Results from "../Results";

const fakeSelectedCorrect = [
  { 2: "January 25, 1945" },
  { 0: "Jerk" },
  { 1: "True" }
];

const fakeSelectedIncorrect = [
  { 2: "December 16, 1944" },
  { 0: "Shift" },
  { 1: "False" }
];

const fakeUpdateResults = [
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

describe("<Results />", () => {
  test("render", () => {
    const component = shallow(
      <Results
        updateResults={fakeUpdateResults}
        selectedCorrect={fakeSelectedCorrect}
        selectedIncorrect={fakeSelectedIncorrect}
      />
    );
    expect(component).toMatchSnapshot();
  });

  test("return the default when there is no data to map through", () => {
    const component = shallow(<Results />);
    expect(component).toMatchSnapshot();
  });

  test("does not break without value", () => {
    const component = shallow(<Results />);
    expect(component.find("button")).toHaveLength(1);
  });

  test("does not break with an empty array", () => {
    const component = shallow(
      <Results updateResults={[]} selectedCorrect={[]} selectedIncorrect={[]} />
    );
    expect(component.find("button")).toHaveLength(1);
  });
});
