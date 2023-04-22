import { Box, Grid } from '@mantine/core';
import { PancakeChartBSC } from './PancakeChartBSC/PancakeChartBSC';
import PancakeDetails from './PancakeDetails';
import TopTokensBSC from './TopTokensBSC';

function Dashboard() {
  return (
    <Box>
      <Grid>
        <Grid.Col span={12}>
          <PancakeDetails />
        </Grid.Col>
        <Grid.Col span={12}>
          <PancakeChartBSC />
        </Grid.Col>
        <Grid.Col span={12}>
          <TopTokensBSC />
        </Grid.Col>
      </Grid>
    </Box>
  );
}

export default Dashboard;
