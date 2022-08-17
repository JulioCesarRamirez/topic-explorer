import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import { TopicList } from "./TopicList";

export const TopicWrapper = () => {
  return (
    <>
      <Container fixed>
        <Box>
          <TopicList />
        </Box>
      </Container>
    </>
  );
};
