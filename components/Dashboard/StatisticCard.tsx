import { Text, Card, Tooltip, ActionIcon, Group, Skeleton } from '@mantine/core';
import React from 'react';
import { IconInfoSquare } from '@tabler/icons';

export const StatisticCard = ({ title, tooltip, children, loading = false }: any) => {
  return (
    <Card>
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
        <Text size="xl" weight={700}>
          {children}
        </Text>
      </Skeleton>
    </Card>
  );
};
