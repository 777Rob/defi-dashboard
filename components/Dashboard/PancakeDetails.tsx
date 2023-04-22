import { Paper, Grid, Box, Button } from '@mantine/core';
import React from 'react';
import { PancakeTextIcon } from '../icons';
import usePancakeDetails from 'hooks/usePancakeDetails';
import { displayNumber } from '../../utils/index';
import StatisticCard from './StatisticCard';

const PancakeDetails = () => {
  const { data, loading, error } = usePancakeDetails();
  console.log(data, loading, error);

  return (
    <Grid>
      <Grid.Col span={3}>
        <StatisticCard
          loading={loading}
          title="Volume USD (24h)"
          tooltip="Total amount of USD traded on the exchange in the past 24 hours"
        >
          ${displayNumber(data?.dailyVolumeUSD)}
        </StatisticCard>
      </Grid.Col>
      <Grid.Col span={3}>
        <StatisticCard
          loading={loading}
          title="Total Liquidity USD"
          tooltip="Total amount of USD currently locked in the exchange"
        >
          ${displayNumber(data?.totalLiquidityUSD)}
        </StatisticCard>
      </Grid.Col>
      <Grid.Col span={3}>
        <StatisticCard
          loading={loading}
          title="Volume USD (All Time)"
          tooltip="Total amount of $USD traded on the exchange in the past 24 hours"
        >
          ${displayNumber(data?.totalVolumeUSD)}
        </StatisticCard>
      </Grid.Col>
      <Grid.Col span={3}>
        <StatisticCard
          loading={loading}
          title="Volume USD (24h)"
          tooltip="Total amount of $USD traded on the exchange in the past 24 hours"
        >
          ${displayNumber(data?.dailyVolumeUSD)}
        </StatisticCard>
      </Grid.Col>
    </Grid>
  );
};

export default PancakeDetails;
