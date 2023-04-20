import React, { useCallback, useState } from 'react';
import AppShell from '../AppShell/AppShell';
import { Box, Button, Container, Grid, Paper, Skeleton, Text } from '@mantine/core';
import { gql, useQuery } from '@apollo/client';
import usePancakeDayDataBSC from '../../hooks/usePancakeDayDataBSC';
import { useMemo } from 'react';
import { EthereumIcon, BinanceIcon } from '../icons';

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';

const CustomTooltip = React.memo(({ active, payload, label }: any) => {
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

const generateTicks = (data: any) => {
  if (!data) return [];

  const ticks = [];
  const step = 20000000;
  let max = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i].dailyVolumeUSD > max) {
      max = data[i].dailyVolumeUSD;
    }
  }

  for (let i = 0; i < max / step; i++) {
    ticks.push(step * i);
    console.log(max, ticks);
  }

  return ticks;
};
const PancakeChartBSC = () => {
  const { loading, error, data } = usePancakeDayDataBSC();
  const [timePeriod, setTimePeriod] = useState<any>(7);

  const ticks = useMemo(() => {
    return generateTicks(data?.splice(0, timePeriod));
  }, [data, timePeriod]);

  const dataForPeriod = useMemo(() => {
    if (!data) return [];

    return data?.slice(0, timePeriod);
  }, [ticks]);

  return (
    <Paper shadow="lg" p="md">
      <Text weight={700} pb="sm" sx={{ textAlign: 'center' }} size="lg">
        Pancake Swap Trading Trend Diagram{' '}
      </Text>
      <Button.Group>
        <Button
          onClick={() => {
            setTimePeriod(7);
          }}
        >
          <Text weight={700} size="sm">
            7 Days
          </Text>
        </Button>

        <Button
          onClick={() => {
            setTimePeriod(30);
          }}
        >
          <Text weight={700} size="sm">
            30 Days
          </Text>
        </Button>

        <Button
          onClick={() => {
            setTimePeriod(90);
          }}
        >
          <Text weight={700} size="sm">
            90 Days
          </Text>
        </Button>
      </Button.Group>
      <Skeleton sx={{ width: '100%', height: '100%' }} mih={350} p="lg" visible={loading}>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={dataForPeriod} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis
              yAxisId="left"
              orientation="left"
              tickFormatter={(tick) => `${tick / 1000000}M`}
              ticks={ticks}
            />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar
              yAxisId="left"
              dataKey="dailyVolumeUSD"
              name="Daily Volume USD"
              fill="#00abfb"
              unit="k"
            />
            <LineChart>
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="totalTransactions"
                stroke="#ff7300"
                activeDot={{ r: 5 }}
              />
              <Line
                yAxisId="right"
                type="monotone"
                label="Daily Volume USD"
                dataKey="Daily Volume USD"
                stroke="#387908"
                activeDot={{ r: 5 }}
              />
            </LineChart>
          </BarChart>
        </ResponsiveContainer>
      </Skeleton>
    </Paper>
  );
};

function Dashboard() {
  const { loading, error, data } = usePancakeDayDataBSC();

  return (
    <Box>
      <Grid>
        <Grid.Col span={12}>
          <PancakeChartBSC />
        </Grid.Col>
      </Grid>
    </Box>
  );
}

export default Dashboard;
