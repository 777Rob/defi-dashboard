import { Text, Grid, Group, ActionIcon } from '@mantine/core';
import React from 'react';
import { TopToken } from 'hooks/useTopTokens';
import { IconArrowsSort } from '@tabler/icons';
import { PairDayData } from 'generated/bsc-query-types';
import { FormattedPairDayData } from 'hooks/useTopPairs';

export type SortOrder = {
  [key in keyof FormattedPairDayData]?: 'asc' | 'desc';
};

export type SortableField = 'dailyVolumeUSD' | 'reserveUSD' | 'dailyTxns';

export const sortData = (
  data: FormattedPairDayData[],
  sortBy: SortableField,
  sortOrder: SortOrder
): FormattedPairDayData[] => {
  return data.sort((a, b) => {
    const aValue =
      sortBy === 'dailyTxns' || sortBy === 'dailyVolumeUSD' || sortBy === 'reserveUSD'
        ? a[sortBy]
        : a[sortBy].toLowerCase();
    const bValue =
      sortBy === 'dailyTxns' || sortBy === 'dailyVolumeUSD' || sortBy === 'reserveUSD'
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
    <Grid align="center" pb="sm">
      <Grid.Col span={6}>
        <Group>
          <Text>Name</Text>
          {/* <ActionIcon size="sm" onClick={() => onSortChange('dailyVolumeUSD')}>
            <IconArrowsSort />
          </ActionIcon> */}
        </Group>
      </Grid.Col>
      <Grid.Col span={2}>
        <Group>
          <Text>Volume USD (24H)</Text>
          <ActionIcon size="sm" onClick={() => onSortChange('dailyVolumeUSD')}>
            <IconArrowsSort />
          </ActionIcon>
        </Group>
      </Grid.Col>
      <Grid.Col span={2}>
        <Group>
          <Text>Tx (24h)</Text>
          <ActionIcon size="sm" onClick={() => onSortChange('dailyTxns')}>
            <IconArrowsSort />
          </ActionIcon>
        </Group>
      </Grid.Col>
      <Grid.Col span={2}>
        <Group>
          <Text>Reserve USD</Text>
          <ActionIcon size="sm" onClick={() => onSortChange('reserveUSD')}>
            <IconArrowsSort />
          </ActionIcon>
        </Group>
      </Grid.Col>
    </Grid>
  );
};
