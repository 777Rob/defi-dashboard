import { Box, Grid } from '@mantine/core';
import { PancakeChartBSC } from './PancakeChartBSC';

function Dashboard() {
  return (
    <Box>
      <Grid>
        <Grid.Col span={12}>
          <PancakeChartBSC />
        </Grid.Col>
      </Grid>
    </Box>
  );
}

export default Dashboard;
