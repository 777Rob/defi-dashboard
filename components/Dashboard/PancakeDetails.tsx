import { Paper, Card } from '@mantine/core';
import React from 'react';
import { PancakeTextIcon } from '../icons';
import usePancakeDetails from 'hooks/usePancakeDetails';

const PancakeDetails = () => {
  const { data, loading, error } = usePancakeDetails();
  console.log(data, loading, error);
  return (
    <Card>
      <PancakeTextIcon width="40%" />
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
    </Card>
  );
};

export default PancakeDetails;
