import { fireEvent, render } from "@testing-library/react";
import React from "react";
import { RelatedTopics } from "../../api/getTopics";
import { TopicAccordion } from "../../components/TopicAccordion";
import { capitalize } from "../../helpers/capitalize";

const props = {
  id: "1",
  name: "react native",
  stargazers: {
    totalCount: 10,
  },
} as RelatedTopics;

const setup = () => {
  const utils = render(<TopicAccordion topicData={props} />);
  const title = utils.getByLabelText("accordion-title");
  const label = utils.getByText(`Related topic - ${capitalize(props.name)}`);
  const hiddenLabel = utils.getByText(
    `Total of stargazers ${props.stargazers.totalCount.toLocaleString()}`
  );
  return {
    title,
    label,
    hiddenLabel,
    ...utils,
  };
};

describe("Test in <TopicAccordion />", () => {
  it("should change input value", () => {
    const { label } = setup();
    expect(label.textContent).toBe(`Related topic - ${capitalize(props.name)}`);
  });

  it("should not send information when submit form", () => {
    const { title, hiddenLabel } = setup();

    fireEvent.click(title);
    expect(hiddenLabel.textContent).toBe(
      `Total of stargazers ${props.stargazers.totalCount.toLocaleString()}`
    );
  });
});
