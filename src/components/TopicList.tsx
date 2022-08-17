import React, { useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import ErrorIcon from "@mui/icons-material/Error";
import Typography from "@mui/material/Typography";

import { RelatedTopics, usePostsQuery } from "../api/getTopics";
import { TopicAccordion } from "./TopicAccordion";
import { TopicSearcher } from "./TopicSearcher";
import { capitalize } from "../helpers/capitalize";
import { BoxWrapper, ListWrapper } from "./styled";

export const TopicList = () => {
  const [topicToExplore, setTopicToExplore] = useState("react");
  const { topic, loading } = usePostsQuery(topicToExplore);

  return (
    <ListWrapper>
      <Typography variant="h4" mb={2}>
        Current topic {capitalize(topicToExplore)}
      </Typography>
      <TopicSearcher setTopic={setTopicToExplore} />
      <BoxWrapper>
        {loading ? (
          <LinearProgress color="success" />
        ) : topic ? (
          topic.relatedTopics.map((topicRelated: RelatedTopics) => (
            <TopicAccordion key={topicRelated.id} topicData={topicRelated} />
          ))
        ) : (
          <ErrorIcon />
        )}
      </BoxWrapper>
    </ListWrapper>
  );
};
