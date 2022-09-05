import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { TopicContainer } from './TopicContainer';

export const TopicWrapper = () => {
  return (
    <Container fixed>
      <Box>
        <TopicContainer />
      </Box>
    </Container>
  );
};
