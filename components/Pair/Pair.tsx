import { Card, Text, Grid, Skeleton, Button } from '@mantine/core';
import PairChart from './PairChart';
import usePairDayDatas from 'hooks/usePairDayDatas';
import { Chains } from 'utils/chain';
import StatisticCard from 'components/UI/StatisticCard';
import TokenStatisticCard from 'components/UI/TokenStatisticCard';
import { useRouter } from 'next/router';
const Pair = ({ pairAddress }: { pairAddress: string }) => {
  const { data, loading, error } = usePairDayDatas(pairAddress);
  const router = useRouter();

  if (loading) {
    return (
      <Skeleton width={'100%'} height="600px">
        <Text> Loading... </Text>
      </Skeleton>
    );
  }

  if (error !== undefined || data == undefined || data.length == 0) {
    return (
      <Card
        w="full"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '250px',
        }}
      >
        <Text
          sx={{
            fontSize: '50px',
          }}
          weight={700}
        >
          Error getting data
        </Text>
        <Button size="xl" onClick={() => router.push('/')}>
          Return To Dashboard
        </Button>
      </Card>
    );
  }

  const token0 = data[0]?.token0;
  const token1 = data[0]?.token1;

  return (
    <Grid>
      <Grid.Col span={4}>
        <TokenStatisticCard
          token={token0}
          reserve={data[0].reserve0}
          dailyVolume={data[0].dailyVolumeToken0}
        />
      </Grid.Col>
      <Grid.Col span={4}>
        <TokenStatisticCard
          token={token1}
          reserve={data[0].reserve1}
          dailyVolume={data[0].dailyVolumeToken1}
        />
      </Grid.Col>
      <Grid.Col span={12}>
        <PairChart data={data} loading={loading} error={error} />;
      </Grid.Col>
    </Grid>
  );
};

export default Pair;
