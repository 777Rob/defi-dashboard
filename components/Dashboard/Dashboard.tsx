import React from 'react';
import AppShell from '../AppShell/AppShell';
import { Container, Paper, Text } from '@mantine/core';
import { gql, useQuery } from '@apollo/client';
import usePancakeDayDataBSC from '../../hooks/usePancakeDayDataBSC';

function Dashboard() {
  const { loading, error, data } = usePancakeDayDataBSC();

  return (
    <Container>
      <Text>Dashboard</Text>
      <Paper>
        <Text>Pancake Swap Trading Trend Diagram </Text>
      </Paper>
    </Container>
  );
}

export default Dashboard;
