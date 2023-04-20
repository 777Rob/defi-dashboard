import React from 'react';
import { Paper, Text } from '@mantine/core';

export const CustomTooltip = React.memo(({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    console.log(payload);
    return (
      <Paper
        p="md"
        shadow="xs"
        onClick={() => {
          console.log(payload, active);
        }}
      >
        <Text>
          <strong>Date: </strong>
          {label}
        </Text>
        <Text>
          <strong>Volume USD: </strong>
          {(payload[0].value / 1000000).toPrecision(6)} M
        </Text>
        <Text>
          <strong>Transaction Count: </strong>
          {payload[0]?.payload.totalTransactions}
        </Text>
      </Paper>
    );
  }

  return null;
});
