import React, { useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Typography from "@mui/material/Typography";

import { RelatedTopics, usePostsQuery } from "../api/getTopics";
import { TopicAccordion } from "./TopicAccordion";
import { TopicSearcher } from "./TopicSearcher";
import { capitalize } from "../helpers/capitalize";
import { BoxWrapper, ListWrapper } from "./styled";

export const TopicList = () => {
  const [topicToExplore, setTopicToExplore] = useState("react");
  const { topic, loading, error } = usePostsQuery(topicToExplore);

  return (
    <ListWrapper>
      <Typography variant="h4" mb={2}>
        Current topic {capitalize(topicToExplore)}
      </Typography>
      <TopicSearcher setTopic={setTopicToExplore} />
      <BoxWrapper>
        {loading ? (
          <LinearProgress color="success" />
        ) : !error ? (
          topic && topic.relatedTopics.length ? topic.relatedTopics.map((topicRelated: RelatedTopics) => (
            <TopicAccordion key={topicRelated.id} topicData={topicRelated} setTopic={setTopicToExplore} />
          )) : (
            <Alert severity="warning">
              <AlertTitle>{capitalize(topicToExplore)}</AlertTitle>
              Has no related topics
            </Alert>
          )
        ) : (
          <Alert severity="error">Ups! something went wrong</Alert>
        )}
      </BoxWrapper>
    </ListWrapper>
  );
};
