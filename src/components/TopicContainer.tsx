import React, { useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Alert from '@mui/material/Alert';
import Typography from "@mui/material/Typography";

import { usePostsQuery } from "../api/getTopics";
import { TopicSearcher } from "./TopicSearcher";
import { capitalize } from "../helpers/capitalize";
import { BoxWrapper, ListWrapper } from "./styled";
import { TopicList } from "./TopicList";

export const TopicContainer = () => {
  const [topicToExplore, setTopicToExplore] = useState("react");
  const { topic, loading, error } = usePostsQuery(topicToExplore);


  if (error) {
    return  <Alert severity="error">Ups! something went wrong</Alert>
  }

  return (
    <ListWrapper>
      <Typography variant="h4" mb={2}>
        Current topic {capitalize(topicToExplore)}
      </Typography>
      <TopicSearcher setTopic={setTopicToExplore} />
      <BoxWrapper>
        {loading? (
          <LinearProgress color="success" />
        ): (<TopicList topic={topic} topicToExplore={topicToExplore} setTopicToExplore={setTopicToExplore}/>)}
      </BoxWrapper>
    </ListWrapper>
  );
};
