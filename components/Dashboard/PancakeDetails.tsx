import { Paper } from '@mantine/core';
import React from 'react';
import { PancakeTextIcon } from '../icons';

const PancakeDetails = () => {
  return (
    <Paper shadow="lg" p="lg" display="flex" sx={{ justifyContent: 'center' }}>
      <PancakeTextIcon width="50%" />
    </Paper>
  );
};

export default PancakeDetails;
