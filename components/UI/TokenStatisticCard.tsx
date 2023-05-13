import { Text, Card, Tooltip, ActionIcon, Group, Skeleton } from '@mantine/core';
import React from 'react';
import { IconInfoSquare } from '@tabler/icons';
import { PairDayData, Token, useGetPairDayDatasBscLazyQuery } from '../generated/bsc-query-types';

const TokenStatisticCard = ({
  token,
  tooltip,
  children,
  loading = false,
}: {
  token: Pick<Token, 'name' | 'id' | 'symbol' | 'totalTransactions' | 'tradeVolume' | 'derivedUSD'>;
  tooltip: string;
  children: any;
  loading?: boolean;
}) => {
  return (
    <Card h={'100%'}>
      <Group position="apart">
        <Text size="md" weight={600}></Text>
        {tooltip && (
          <Tooltip position="top" withinPortal width={220} zIndex={100} multiline label={tooltip}>
            <ActionIcon variant="primary">
              <IconInfoSquare color="#00abfb" />
            </ActionIcon>
          </Tooltip>
        )}
      </Group>
      <Skeleton visible={loading} py="sm">
        {children}
      </Skeleton>
    </Card>
  );
};

export default TokenStatisticCard;
