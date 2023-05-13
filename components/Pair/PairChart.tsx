import { Avatar, Card, Group, Paper, SegmentedControl, Skeleton, Text } from '@mantine/core';
import { useMemo, useState } from 'react';
import usePancakeDayDataBSC from 'hooks/usePairDayDatas';
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
import { CustomTooltip } from './Chart/CustomTooltip';
import { generateTicks } from 'utils';
import { BinanceIcon } from 'components/icons';
import usePairDayDatas from 'hooks/usePairDayDatas';
import { Chains } from 'utils/chain';
import { IconCircle } from '@tabler/icons';
import { getLogoUri } from 'utils/getLogoUri';

const PairChart = ({ data, loading, error }: any) => {
  const [timePeriod, setTimePeriod] = useState<any>(7);

  const ticks = useMemo(() => {
    return generateTicks(data?.slice(0, timePeriod));
  }, [data, timePeriod]);

  const dataForPeriod = useMemo(() => {
    if (!data) return [];

    return data?.slice(0, timePeriod);
  }, [ticks]);

  const timePeriods = [
    { label: '7 Days', value: '7' },
    { label: '30 Days', value: '30' },
    { label: '90 Days', value: '90' },
  ];

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <Card>
      <Card.Section px="xl" py="md">
        <Group position="apart">
          {data && data[0] && (
            <Text weight={700} size="xl" display="flex" sx={{ alignItems: 'center', gap: '10px' }}>
              <Avatar.Group className="flex -gap-y-4">
                <Avatar radius="xl" src={getLogoUri(data[0].token0.id)} size="md">
                  <IconCircle fill="white" size="full" />
                </Avatar>
                <Avatar radius="xl" src={getLogoUri(data[0].token1.id)} size="md">
                  <IconCircle fill="white" size="full" />
                </Avatar>
              </Avatar.Group>
              {data[0].token0.symbol}/{data[0].token1.symbol}
              {'  '}
              Trading Volume Diagram
            </Text>
          )}

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
            {/* <CartesianGrid /> */}
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
            <Line type="monotone" unit="k" dataKey="dailyVolumeUSD" stroke="#ff7300" />

            <LineChart>
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="dailyTxns"
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
    </Card>
  );
};

export default PairChart;
