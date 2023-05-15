import React from 'react';
import { Paper, Text } from '@mantine/core';
import { displayNumber } from '../../../utils/displayNumber';

export const CustomTooltip = React.memo(({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const { totalLiquidityToken, dailyTxns, dailyVolumeUSD, priceUSD, symbol, totalLiquidityUSD } =
      payload[0].payload;

    console.log('payload[0].payload');
    console.log(payload[0].payload);
    return (
      <Paper p="md" shadow="xs">
        <Text>
          <strong>Date: </strong>
          {label}
        </Text>
        <Text>
          <strong>Volume USD: </strong>
          {displayNumber(dailyVolumeUSD)} $
        </Text>
        <Text>
          <strong>Price USD: </strong>
          {displayNumber(priceUSD)} $
        </Text>
        <Text>
          <strong>Transaction Count: </strong>
          {payload[0]?.payload.dailyTxns}
        </Text>

        <Text>
          <strong>Liquidity {symbol}: </strong>
          {totalLiquidityToken ? `${displayNumber(totalLiquidityToken)} $` : 'N/A'}
        </Text>
        <Text>
          <strong>Liquidity USD: </strong>
          {totalLiquidityUSD ? `${displayNumber(totalLiquidityUSD)} $` : 'N/A'}
        </Text>
      </Paper>
    );
  }

  return null;
});
