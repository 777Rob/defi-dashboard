import React from 'react';
import AppShell from '../AppShell/AppShell';
import { Box, Container, Grid, Paper, Skeleton, Text } from '@mantine/core';
import { gql, useQuery } from '@apollo/client';
import usePancakeDayDataBSC from '../../hooks/usePancakeDayDataBSC';

const PancakeChartBSC = () => {
  const { loading, error, data } = usePancakeDayDataBSC();

  return (
    <Paper shadow="lg" p="md">
      <Text weight={700} pb="sm" sx={{ textAlign: 'center' }} size="lg">
        Pancake Swap Trading Trend Diagram{' '}
      </Text>
      <Skeleton
        sx={{ width: '100%', height: '100%' }}
        mih={350}
        p="lg"
        visible={loading}
      ></Skeleton>
    </Paper>
  );
};

function Dashboard() {
  const { loading, error, data } = usePancakeDayDataBSC();

  console.log(data);
  return (
    <Box>
      <Grid>
        <Grid.Col span={6}>
          <PancakeChartBSC />
        </Grid.Col>
      </Grid>
    </Box>
  );
}

export default Dashboard;
