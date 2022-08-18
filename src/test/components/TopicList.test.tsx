import React from "react";
import { MockedProvider } from "@apollo/react-testing";
import { act, render, screen } from "@testing-library/react";
import { capitalize } from "../../helpers/capitalize";
import { TopicList } from "../../components/TopicList";
import { getTopicQuery } from "../../api/getTopics";


describe("Test in <TopicList />", () => {
  it("should show topics", () => {
    const MockResponse = [
      {
        request: {
          query: getTopicQuery,
        },
        result: {
          data: {
            name: "react",
            relatedTopics: [{
              id: "1",
              name: "react native",
              stargazers: {
                totalCount: 10,
              },
            },]
          },
        },
      },
    ];
    const setup = () => {
      return render(
        <MockedProvider mocks={MockResponse}>
          <TopicList />
        </MockedProvider>
      );
    };
    const { container } = setup();
    const expectedResponse = capitalize(MockResponse[0].result.data.name);
    expect(container.textContent).toMatch(`Current topic ${expectedResponse}`);
  });
  it("should show warning", () => {
    const MockResponse = [
      {
        request: {
          query: getTopicQuery,
        },
        result: {
          data: {
            name: "react",
            relatedTopics: []
          },
        },
      },
    ];
    const setup = () => {
      return render(
        <MockedProvider mocks={MockResponse}>
          <TopicList />
        </MockedProvider>
      );
    };
    const { container } = setup();
    expect(container.textContent).toMatch(`Current topic`);
    expect(screen.findByText(`Has no related topics`)).toBeDefined();
  });
});
