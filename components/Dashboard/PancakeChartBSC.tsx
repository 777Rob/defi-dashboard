import { Button, Group, Paper, Skeleton, Text } from '@mantine/core';
import { useMemo, useState } from 'react';
import usePancakeDayDataBSC from '../../hooks/usePancakeDayDataBSC';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { CustomTooltip } from './CustomTooltip';
import { generateTicks } from './utils';
import { BinanceIcon } from '../icons';

export const PancakeChartBSC = () => {
  const { loading, data } = usePancakeDayDataBSC();
  const [timePeriod, setTimePeriod] = useState<any>(7);

  const ticks = useMemo(() => {
    return generateTicks(data?.splice(0, timePeriod));
  }, [data, timePeriod]);

  const dataForPeriod = useMemo(() => {
    if (!data) return [];

    return data?.slice(0, timePeriod);
  }, [ticks]);

  return (
    <Paper shadow="lg" p="lg">
      <Group position="apart">
        <Text weight={700} pb="sm" size="xl">
          Pancake Swap Trading Volume Diagram
        </Text>
        <Text
          weight={700}
          pb="sm"
          display="flex"
          align="center"
          sx={{ alignItems: 'center', columnGap: '10px' }}
          size="xl"
        >
          Binance Smart Chain <BinanceIcon width={35} />
        </Text>
      </Group>
      <Button.Group
        style={{ display: 'flex', justifyContent: 'center', margin: '0 auto', columnGap: '10px' }}
      >
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

      <Skeleton sx={{ width: '100%', height: '100%' }} mih={350} visible={loading}>
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
