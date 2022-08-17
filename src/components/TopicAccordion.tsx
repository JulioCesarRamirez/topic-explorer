import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { RelatedTopics } from "../api/getTopics";
import { capitalize } from "../helpers/capitalize";

interface Porps {
  topicData: RelatedTopics;
}

export const TopicAccordion = ({ topicData }: Porps) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-label="accordion-title"
      >
        <Typography>Related topic - {capitalize(topicData.name)}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="h5">
          Total of stargazers {topicData.stargazers.totalCount.toLocaleString()}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};
