import React, { useState } from 'react';
import AppShell from '../AppShell/AppShell';
import { Box, Container, Grid, Paper, Skeleton, Text } from '@mantine/core';
import { gql, useQuery } from '@apollo/client';
import usePancakeDayDataBSC from '../../hooks/usePancakeDayDataBSC';
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

const CustomTooltip = ({ active, payload, label }: any) => {
  console.log(payload);
  if (active && payload && payload.length) {
    return (
      <Paper
        p="md"
        shadow="xs"
        onClick={() => {
          console.log(payload, active);
        }}
      >
        <div>
          <strong>Date: </strong>
          {label}
        </div>
        <div>
          <strong>Volume USD: </strong>
          {(payload[0].value / 1000000).toPrecision(6)} M
        </div>
        <div>
          <strong>Transaction Count: </strong>
          {payload[0]?.payload.totalTransactions}
        </div>
      </Paper>
    );
  }

  return null;
};

const PancakeChartBSC = () => {
  const { loading, error, data } = usePancakeDayDataBSC();
  const [timePeriod, setTimePeriod] = useState<any>(7);

  return (
    <Paper shadow="lg" p="md">
      <Text weight={700} pb="sm" sx={{ textAlign: 'center' }} size="lg">
        Pancake Swap Trading Trend Diagram{' '}
      </Text>
      <Skeleton sx={{ width: '100%', height: '100%' }} mih={350} p="lg" visible={loading}>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={data?.splice(0, timePeriod) || []}
            margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis
              yAxisId="left"
              orientation="left"
              tickFormatter={(tick) => `${tick / 1000000}M`}
              ticks={[
                0, 20000000, 40000000, 60000000, 80000000, 100000000, 120000000, 140000000,
                160000000, 180000000, 200000000, 220000000, 240000000, 260000000, 280000000,
                300000000, 320000000, 340000000,
              ]}
            />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar yAxisId="left" dataKey="dailyVolumeUSD" fill="#8884d8" unit="k" />
            <LineChart dataKey="date">
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
                dataKey="dailyVolumeUSD"
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
