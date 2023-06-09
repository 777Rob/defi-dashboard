import { Text, Grid, Skeleton } from '@mantine/core';
import PairChart from './TokenChart';
import TokenStatisticCard from './StatisticCard';
import Error from 'components/Error';
import useTokenData from 'hooks/useTokenData';

const Token = ({ tokenAddress }: { tokenAddress: string }) => {
  const { data, loading, error } = useTokenData(tokenAddress);

  if (loading) {
    return (
      <Skeleton width={'100%'} height="600px">
        <Text> Loading... </Text>
      </Skeleton>
    );
  }

  if (error || !data) {
    return <Error />;
  }

  return (
    <Grid>
      <Grid.Col span={12}>
        <TokenStatisticCard token={data[0]} />
      </Grid.Col>
      <Grid.Col span={12}>
        <PairChart data={data} loading={loading} error={error} />
      </Grid.Col>
    </Grid>
  );
};

export default Token;
