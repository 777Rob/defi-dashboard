import { Card, Group, SegmentedControl, Skeleton, Text } from '@mantine/core';
import { useMemo, useState } from 'react';
import {
  Bar,
  BarChart,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { generateTicks } from 'utils/generateTicks';
import usePancakeDayData from '../../../hooks/usePancakeDayData';
import { CustomTooltip } from './CustomTooltip';
import { curveBasis } from 'd3-shape';

const calculateTrendlineData = (data: any, key: any) => {
  if (!data) return [];

  const n = data.length;
  const sumX = data.reduce((sum: any, item: any, index: any) => sum + index, 0);
  const sumY = data.reduce((sum: any, item: { [x: string]: any }) => sum + item[key], 0);
  const sumXY = data.reduce(
    (sum: number, item: { [x: string]: number }, index: number) => sum + index * item[key],
    0
  );
  const sumXX = data.reduce((sum: number, item: any, index: number) => sum + index * index, 0);

  const slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
  const intercept = (sumY - slope * sumX) / n;

  return data.map((item: any, index: number) => ({
    ...item,
    trendline: slope * index + intercept,
  }));
};

export const PancakeChartBSC = () => {
  const { loading, data } = usePancakeDayData();
  const [timePeriod, setTimePeriod] = useState<any>(7);

  const ticks = useMemo(() => {
    return generateTicks(data?.slice(0, timePeriod));
  }, [data, timePeriod]);

  const timePeriods = [
    { label: '7 Days', value: '7' },
    { label: '30 Days', value: '30' },
    { label: '90 Days', value: '90' },
  ];

  const dataForPeriod = useMemo(() => {
    if (!data) return [];

    const dataWithTrendline = calculateTrendlineData(data.slice(0, timePeriod), 'dailyVolumeUSD');
    return dataWithTrendline;
  }, [data, timePeriod]);

  return (
    <Card>
      <Card.Section px="xl" py="md">
        <Group position="apart">
          <Text weight={700} size="xl">
            Pancake Swap Trading Volume Diagram
          </Text>

          <SegmentedControl
            data={timePeriods}
            color="blue"
            value={timePeriod.toString()}
            onChange={(value) => setTimePeriod(parseInt(value))}
          />
        </Group>
      </Card.Section>

      <Skeleton sx={{ width: '100%', height: '100%' }} mih={350} visible={loading}>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            margin={{
              bottom: 0,
              left: 0,
              top: 0,
              right: 0,
            }}
            data={dataForPeriod}
          >
            <XAxis dataKey="date" />
            <YAxis
              yAxisId="left"
              orientation="left"
              tickFormatter={(tick) => `${(tick / 1000000).toFixed(0)}M`}
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
              radius={[5, 5, 0, 0]}
              unit="k"
            />
          </BarChart>
        </ResponsiveContainer>
      </Skeleton>
    </Card>
  );
};
