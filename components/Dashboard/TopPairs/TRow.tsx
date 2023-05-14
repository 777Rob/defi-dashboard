import { Text, Avatar, Grid, Group } from '@mantine/core';
import React from 'react';
import { TopToken } from 'hooks/useTopTokens';
import { IconCircle } from '@tabler/icons';
import { displayNumber } from 'utils';
import { PairDayData } from 'generated/bsc-query-types';
import { getLogoUri } from 'utils/getLogoUri';
import { useRouter } from 'next/router';

export const TRow = ({
  dailyTxns,
  reserveUSD,
  dailyVolumeUSD,
  id,
  token0,
  token1,
  isFirst = false,
  isLast = false,
}: PairDayData & {
  isFirst: boolean;
  isLast: boolean;
}) => {
  const router = useRouter();

  return (
    <Grid
      align="center"
      m="0"
      sx={{
        borderRadius: isFirst ? '0.5rem 0.5rem 0 0' : isLast ? '0 0 0.5rem 0.5rem' : '0',
        border: '1px solid #606166',
      }}
    >
      <Grid.Col span={6}>
        <Group sx={{ cursor: 'pointer' }} onClick={() => router.push(`/pair/${id}`)}>
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
