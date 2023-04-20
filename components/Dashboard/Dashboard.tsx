import React from 'react';
import AppShell from '../AppShell/AppShell';
import { Box, Container, Paper, Text } from '@mantine/core';
import { gql, useQuery } from '@apollo/client';
import usePancakeDayDataBSC from '../../hooks/usePancakeDayDataBSC';

function Dashboard() {
  const { loading, error, data } = usePancakeDayDataBSC();
  console.log(data);
  return (
    <Box>
      <Paper shadow="lg" w="50%" h="400px">
        <Text weight={700} size="lg" p="md">
          Pancake Swap Trading Trend Diagram{' '}
        </Text>
      </Paper>
    </Box>
  );
}

export default Dashboard;
