import React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import { RelatedTopics, Topic } from '../api/getTopics';
import { TopicAccordion } from './TopicAccordion';
import { capitalize } from '../helpers/capitalize';
interface Props {
  topic: Topic | undefined;
  topicToExplore: string;
  setTopicToExplore: (newTopic: string) => void;
}
export const TopicList = ({
  topic,
  topicToExplore,
  setTopicToExplore,
}: Props) => {
  return (
    <>
      {topic && topic.relatedTopics.length ? (
        topic.relatedTopics.map((topicRelated: RelatedTopics) => (
          <TopicAccordion
            key={topicRelated.id}
            topicData={topicRelated}
            setTopic={setTopicToExplore}
          />
        ))
      ) : (
        <Alert severity='warning'>
          <AlertTitle>{capitalize(topicToExplore)}</AlertTitle>
          Has no related topics
        </Alert>
      )}
    </>
  );
};
