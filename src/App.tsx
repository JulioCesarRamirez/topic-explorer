import React from "react";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./api/apolloClient";
import { TopicWrapper } from "./components/TopicWrapper";

export const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <TopicWrapper />
    </ApolloProvider>
  );
};
