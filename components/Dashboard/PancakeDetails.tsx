import { Avatar, Box, Grid, Group, Select, Text } from '@mantine/core';
import usePancakeDetails from 'hooks/usePancakeDetails';
import React, { forwardRef, useEffect, useState } from 'react';
import { displayNumber } from 'utils/displayNumber';
import StatisticCard from '../UI/StatisticCard';
import { useChain } from 'hooks/useChain';
import { Chains } from 'utils/chain';

const chains = [
  {
    image: 'bsc.png',
    label: 'Binance Smart Chain',
    value: Chains.BSC,
  },
  {
    image: 'eth.png',
    label: 'Ethereum',
    value: Chains.ETH,
  },
  {
    image: 'multiple.svg',
    label: 'All Networks',
    value: Chains.BSC,
  },
];

interface ItemProps extends React.ComponentPropsWithoutRef<'div'> {
  image: string;
  label: string;
}

const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ image, label, ...others }: ItemProps, ref) => (
    <div ref={ref} {...others}>
      <Group noWrap>
        <Avatar src={image} />
        <div>
          <Text size="sm">{label}</Text>
        </div>
      </Group>
    </div>
  )
);

const PancakeDetails = () => {
  const { data, loading, error } = usePancakeDetails();
  const { chain, setChain } = useChain();

  return (
    <Grid align="stretch">
      <Grid.Col span={3}>
        <StatisticCard
          loading={loading}
          title="Volume USD (24h)"
          tooltip="Total amount of USD traded on the exchange in the past 24 hours"
        >
          <Text weight={700} size="xl">
            ${displayNumber(data?.dailyVolumeUSD || 0)}
          </Text>
        </StatisticCard>
      </Grid.Col>
      <Grid.Col span={3}>
        <StatisticCard
          loading={loading}
          title="Total Liquidity USD"
          tooltip="Total amount of USD currently locked in the exchange"
        >
          <Text weight={700} size="xl">
            ${displayNumber(data?.totalLiquidityUSD || 0)}
          </Text>
        </StatisticCard>
      </Grid.Col>
      <Grid.Col span={3}>
        <StatisticCard
          loading={loading}
          title="Volume USD (All Time)"
          tooltip="Total amount of $USD traded on the exchange in the past 24 hours"
        >
          <Text weight={700} size="xl">
            ${displayNumber(data?.totalVolumeUSD || 0)}
          </Text>
        </StatisticCard>
      </Grid.Col>
      <Grid.Col span={3}>
        <StatisticCard
          loading={loading}
          title="Select Network"
          tooltip="Data will be displayed for the selected network"
        >
          <Select
            allowDeselect={false}
            withinPortal={true}
            size="md"
            clearable={false}
            value={chain}
            variant="filled"
            onChange={(value: Chains) => setChain(value)}
            icon={<Avatar size="1.8rem" src={chains.find((c) => c.value === chain)?.image} />}
            defaultValue={chains[0].value}
            dropdownPosition="bottom"
            itemComponent={SelectItem}
            data={chains}
          />
        </StatisticCard>
      </Grid.Col>
    </Grid>
  );
};

export default PancakeDetails;
