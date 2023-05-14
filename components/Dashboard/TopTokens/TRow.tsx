import { Text, Avatar, Grid, Group } from '@mantine/core';
import React from 'react';
import { TopToken } from 'hooks/useTopTokens';
import { IconCircle } from '@tabler/icons';
import { displayNumber } from 'utils/displayNumber';

export const TRow = ({
  name,
  symbol,
  liquidityUSD,
  volumeUSD,
  priceUSD,
  logoUri,
  isFirst = false,
  isLast = false,
}: TopToken & {
  isFirst: boolean;
  isLast: boolean;
}) => {
  console.log(logoUri);
  return (
    <Grid
      m={0}
      sx={{
        borderRadius: isFirst ? '0.5rem 0.5rem 0 0' : isLast ? '0 0 0.5rem 0.5rem' : '0',
        border: '1px solid #606166',
      }}
      align="center"
    >
      <Grid.Col span={6}>
        <Group>
          <Avatar src={logoUri} size="md">
            <IconCircle fill="white" size="full" />
          </Avatar>
          <Text size="md" weight={650}>
            {name} ({symbol})
          </Text>
        </Group>
      </Grid.Col>
      <Grid.Col span={2}>
        <Text size="md" weight={650}>
          ${priceUSD}
        </Text>
      </Grid.Col>
      <Grid.Col span={2}>
        <Text size="md" weight={650}>
          ${displayNumber(liquidityUSD)}
        </Text>
      </Grid.Col>
      <Grid.Col span={2}>
        <Text size="md" weight={650}>
          ${displayNumber(volumeUSD)}
        </Text>
      </Grid.Col>
    </Grid>
  );
};
