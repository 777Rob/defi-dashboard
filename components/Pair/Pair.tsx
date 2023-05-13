import { Grid } from '@mantine/core';
import PairChart from './PairChart';
import usePairDayDatas from 'hooks/usePairDayDatas';
import { Chains } from 'utils/chain';
import StatisticCard from 'components/UI/StatisticCard';
import TokenStatisticCard from 'components/UI/TokenStatisticCard';
const Pair = ({ pairAddress }: { pairAddress: string }) => {
  console.log(pairAddress);
  const { data, loading, error } = usePairDayDatas(Chains.BSC, pairAddress);

  return (
    <Grid>
      <Grid.Col span={4}>
        <TokenStatisticCard token={data && data[0].token0} />
      </Grid.Col>
      <Grid.Col span={12}>
        <PairChart data={data} loading={loading} error={error} />;
      </Grid.Col>
    </Grid>
  );
};

export default Pair;
