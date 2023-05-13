import { Text, Grid, Group, ActionIcon } from '@mantine/core';
import React from 'react';
import { TopToken } from 'hooks/useTopTokens';
import { IconArrowsSort } from '@tabler/icons';

export type SortOrder = {
  [key in keyof TopToken]?: 'asc' | 'desc';
};

export type SortableField = 'name' | 'priceUSD' | 'liquidityUSD' | 'volumeUSD';

export const sortData = (
  data: TopToken[],
  sortBy: SortableField,
  sortOrder: SortOrder
): TopToken[] => {
  return data.sort((a, b) => {
    const aValue =
      sortBy === 'liquidityUSD' || sortBy === 'volumeUSD' || sortBy === 'priceUSD'
        ? a[sortBy]
        : a[sortBy].toLowerCase();
    const bValue =
      sortBy === 'liquidityUSD' || sortBy === 'volumeUSD' || sortBy === 'priceUSD'
        ? b[sortBy]
        : b[sortBy].toLowerCase();

    if (aValue > bValue) {
      return sortOrder[sortBy] === 'desc' ? -1 : 1;
    }
    if (aValue < bValue) {
      return sortOrder[sortBy] === 'desc' ? 1 : -1;
    }
    return 0;
  });
};

export const THead = ({ onSortChange }: { onSortChange: (sortBy: SortableField) => void }) => {
  return (
    <Grid align="center">
      <Grid.Col span={6}>
        <Group>
          <Text>Name</Text>
          <ActionIcon size="sm" onClick={() => onSortChange('name')}>
            <IconArrowsSort />
          </ActionIcon>
        </Group>
      </Grid.Col>
      <Grid.Col span={2}>
        <Group>
          <Text>Price</Text>
          <ActionIcon size="sm" onClick={() => onSortChange('priceUSD')}>
            <IconArrowsSort />
          </ActionIcon>
        </Group>
      </Grid.Col>
      <Grid.Col span={2}>
        <Group>
          <Text>Liquidity</Text>
          <ActionIcon size="sm" onClick={() => onSortChange('liquidityUSD')}>
            <IconArrowsSort />
          </ActionIcon>
        </Group>
      </Grid.Col>
      <Grid.Col span={2}>
        <Group>
          <Text>Volume (24h)</Text>
          <ActionIcon size="sm" onClick={() => onSortChange('volumeUSD')}>
            <IconArrowsSort />
          </ActionIcon>
        </Group>
      </Grid.Col>
    </Grid>
  );
};
