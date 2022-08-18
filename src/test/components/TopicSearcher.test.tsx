import { fireEvent, render } from "@testing-library/react";
import React from "react";
import { TopicSearcher } from "../../components/TopicSearcher";

const setTopic = jest.fn();

const setup = () => {
  const utils = render(<TopicSearcher setTopic={setTopic} />);
  const input = utils.getByTestId("topic-explorer-input") as HTMLInputElement;
  const form = utils.getByTestId("form-topic");
  return {
    input,
    form,
    ...utils,
  };
};

describe("Test in <TopicSearcher />", () => {
  it("should change input value", () => {
    const { input } = setup();
    const value = "Hello world";
    fireEvent.change(input, { target: { value: value } });
    expect(input.value).toBe(value);
  });

  it("should not send information when submit form", () => {
    const { form } = setup();
    fireEvent.change(form, { preventDefault: jest.fn() });
    expect(setTopic).not.toHaveBeenCalled();
  });

  it("should clear the input and call setItemToSearch", () => {
    const { input, form } = setup();
    const value = "Hello world";
    fireEvent.change(input, { target: { value: value } });
    fireEvent.submit(form, { preventDefault: jest.fn() });
    expect(setTopic).toHaveBeenCalled();
    expect(input.value).toBe('');
  });
});
