import { Text, Card, Tooltip, ActionIcon, Group, Skeleton } from '@mantine/core';
import React from 'react';
import { IconInfoSquare } from '@tabler/icons';

const StatisticCard = ({ title, tooltip, children, loading = false }: any) => {
  return (
    <Card h={'100%'}>
      <Group position="apart">
        <Text size="md" weight={600}>
          {title}
        </Text>
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

export default StatisticCard;
