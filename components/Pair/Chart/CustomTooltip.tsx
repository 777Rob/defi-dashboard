import React from 'react';
import { Paper, Text } from '@mantine/core';
import { displayNumber } from '../../../utils/displayNumber';

export const CustomTooltip = React.memo(({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    console.log(payload);
    const { token0, token1 } = payload[0].payload;
    const { reserve0, reserve1, dailyTxns } = payload[0].payload;
    return (
      <Paper p="md" shadow="xs">
        <Text>
          <strong>Date: </strong>
          {label}
        </Text>
        <Text>
          <strong>Volume USD: </strong>
          {(payload[0].value / 1000000).toPrecision(2)}M $
        </Text>
        <Text>
          <strong>Transaction Count: </strong>
          {payload[0]?.payload.dailyTxns}
        </Text>
        <Text>
          <strong>Reserve {token0.symbol}: </strong>
          {reserve0 ? `${displayNumber(reserve0 * parseFloat(token0?.derivedUSD))} $` : 'N/A'}
        </Text>
        <Text>
          <strong>Reserve {token1.symbol}: </strong>
          {reserve1 ? `${displayNumber(reserve1 * parseFloat(token1?.derivedUSD))} $` : 'N/A'}
        </Text>
      </Paper>
    );
  }

  return null;
});
