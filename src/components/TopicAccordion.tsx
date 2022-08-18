import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from '@mui/material/Button';

import { RelatedTopics } from "../api/getTopics";
import { capitalize } from "../helpers/capitalize";

interface Props {
  topicData: RelatedTopics;
  setTopic: (value: string) => void;
}

export const TopicAccordion = ({ topicData, setTopic }: Props) => {

  const handleClick = () => {
    setTopic(topicData.name)
  }

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-label="accordion-title"
      >
        <Typography>Related topic - {capitalize(topicData.name)}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography mb={2} variant="h5">
          Total of stargazers {topicData.stargazers.totalCount.toLocaleString()}
        </Typography>
        <Button onClick={handleClick} variant="outlined">See the related topic to {topicData.name}</Button>
      </AccordionDetails>
    </Accordion>
  );
};
