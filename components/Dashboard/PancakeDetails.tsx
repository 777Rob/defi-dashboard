import { Paper } from '@mantine/core';
import React from 'react';
import { PancakeTextIcon } from '../icons';

const PancakeDetails = () => {
  return (
    <Paper shadow="lg" p="lg" display="flex" sx={{ justifyContent: 'center' }}>
      <PancakeTextIcon width="50%" />
      {/* <Text
          weight={700}
          pb="sm"
          display="flex"
          align="center"
          sx={{ alignItems: 'center', columnGap: '10px' }}
          size="xl"
          >
          Binance Smart Chain <BinanceIcon width={35} />
        </Text> */}
    </Paper>
  );
};

export default PancakeDetails;
