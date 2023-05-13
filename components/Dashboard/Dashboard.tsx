import { Text, Box, Grid, Stack } from '@mantine/core';
import { PancakeChartBSC } from './PancakeChartBSC/PancakeChartBSC';
import PancakeDetails from './PancakeDetails';
import TopTokens from './TopTokens';
import TopPairs from './TopPairs';

function Dashboard() {
  return (
    <Box>
      <Grid>
        <Grid.Col span={12}>
          <PancakeDetails />
        </Grid.Col>
        <Grid.Col span={12}>
          <Stack>
            <Text weight={700} align="center" size="xl">
              Pancake Swap Trading Volume Diagram
            </Text>
            <PancakeChartBSC />
          </Stack>
        </Grid.Col>
        <Grid.Col span={12}>
          <Stack>
            <Text weight={700} align="center" size="xl">
              Trending Tokens
            </Text>
            <TopTokens />
          </Stack>
        </Grid.Col>
        <Grid.Col span={12}>
          <Stack>
            <Text weight={700} align="center" size="xl">
              Trending Pairs
            </Text>
            <TopPairs />
          </Stack>
        </Grid.Col>
      </Grid>
    </Box>
  );
}

export default Dashboard;
