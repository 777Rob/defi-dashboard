import { Text, Avatar, Grid, Group } from '@mantine/core';
import React from 'react';
import { TopToken } from 'hooks/useTopTokens';
import { IconCircle } from '@tabler/icons';
import { displayNumber } from 'utils';
import { PairDayData } from 'generated/bsc-query-types';
import { getLogoUri } from 'utils/getLogoUri';

export const TRow = ({
  dailyTxns,
  dailyVolumeToken0,
  dailyVolumeToken1,
  reserveUSD,
  dailyVolumeUSD,
  id,
  pairAddress,
  token0,
  token1,
  totalSupply,
}: PairDayData) => {
  return (
    <Grid align="center">
      <Grid.Col span={6}>
        <Group>
          <Avatar.Group className="flex -gap-y-4">
            <Avatar radius="xl" src={getLogoUri(token0.id)} size="md">
              <IconCircle fill="white" size="full" />
            </Avatar>
            <Avatar radius="xl" src={getLogoUri(token1.id)} size="md">
              <IconCircle fill="white" size="full" />
            </Avatar>
          </Avatar.Group>
          <Text size="md" weight={650}>
            {token0.symbol}/{token1.symbol}
          </Text>
        </Group>
      </Grid.Col>
      <Grid.Col span={2}>
        <Text size="md" weight={650}>
          ${displayNumber(dailyVolumeUSD)}
        </Text>
      </Grid.Col>
      <Grid.Col span={2}>
        <Text size="md" weight={650}>
          ${displayNumber(dailyTxns)}
        </Text>
      </Grid.Col>
      <Grid.Col span={2}>
        <Text size="md" weight={650}>
          ${displayNumber(reserveUSD)}
        </Text>
      </Grid.Col>
    </Grid>
  );
};
