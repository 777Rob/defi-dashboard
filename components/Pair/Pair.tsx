import { Text, Grid, Skeleton } from '@mantine/core';
import PairChart from './PairChart';
import usePairDayDatas from 'hooks/usePairDayDatas';
import TokenStatisticCard from 'components/UI/TokenStatisticCard';
import Error from 'components/Error';

const Pair = ({ pairAddress }: { pairAddress: string }) => {
  const { data, loading, error } = usePairDayDatas(pairAddress);

  if (loading) {
    return (
      <Skeleton width={'100%'} height="600px">
        <Text> Loading... </Text>
      </Skeleton>
    );
  }

  if (error !== undefined || data == undefined || data.length == 0) {
    return <Error />;
  }

  const token0 = data[0]?.token0;
  const token1 = data[0]?.token1;

  return (
    <Grid>
      <Grid.Col span={6}>
        <TokenStatisticCard
          token={token0}
          reserve={data[0].reserve0}
          dailyVolume={data[0].dailyVolumeToken0}
        />
      </Grid.Col>
      <Grid.Col span={6}>
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
