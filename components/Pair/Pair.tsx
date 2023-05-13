import { Grid } from '@mantine/core';
import PairChart from './PairChart';
import usePairDayDatas from 'hooks/usePairDayDatas';
import { Chains } from 'utils/chain';

const Pair = ({ pairAddress }: { pairAddress: string }) => {
  const { data, loading, error } = usePairDayDatas(Chains.BSC, pairAddress);

  return (
    <Grid>
      <Grid.Col span={12}></Grid.Col>
      <Grid.Col span={12}>
        <PairChart data={data} loading={loading} error={error} />;
      </Grid.Col>
    </Grid>
  );
};

export default Pair;
