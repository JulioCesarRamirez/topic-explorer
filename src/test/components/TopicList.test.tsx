import React from "react";
import { MockedProvider } from "@apollo/react-testing";
import { act, render } from "@testing-library/react";
import { capitalize } from "../../helpers/capitalize";
import { TopicList } from "../../components/TopicList";
import { getTopicQuery } from "../../api/getTopics";

const MockResponse = [
  {
    request: {
      query: getTopicQuery,
    },
    result: {
      data: {
        name: "react",
        relatedTopics: {
          id: "1",
          name: "react native",
          stargazers: {
            totalCount: 10,
          },
        },
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

describe("Test in <TopicList />", () => {
  it("should change input value", () => {
    const { container } = setup();
    const expectedResponse = capitalize(MockResponse[0].result.data.name);
    expect(container.textContent).toMatch(`Current topic ${expectedResponse}`);
  });
});
