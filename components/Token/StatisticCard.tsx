import { Text, Card, Tooltip, ActionIcon, Group, Skeleton, Avatar, Stack } from '@mantine/core';
import React from 'react';
import { IconCircle, IconInfoSquare, IconSearch } from '@tabler/icons';
import { getLogoUri } from 'utils/getLogoUri';
import { displayNumber } from 'utils/displayNumber';

const TokenStatisticCard = ({ token }: { token: any }) => {
  return (
    <Card h={'100%'}>
      <Group position="apart">
        <Text
          size="lg"
          weight={700}
          display="flex"
          sx={{
            gap: 4,
            alignItems: 'center',
          }}
        >
          <Avatar src={getLogoUri(token?.id)} size="md" radius="xl">
            <IconCircle fill="white" size="full" />
          </Avatar>
          {token?.name} ({token?.symbol})
        </Text>

        <Tooltip
          position="top"
          withinPortal
          width={220}
          zIndex={100}
          multiline
          label="See in block explorer"
        >
          <a href={`https://bscscan.com/address/${token?.id}`}>
            <ActionIcon variant="primary">
              <IconSearch color="#00abfb" />
            </ActionIcon>
          </a>
        </Tooltip>
      </Group>
      <Card.Section px="sm" py="sm">
        <Stack spacing={0}>
          <Text weight={500}>
            <b>Price (USD): {'   '}</b>
            {token?.derivedUSD ? `${parseFloat(token?.derivedUSD).toFixed(2)} $` : 'N/A'}
          </Text>
          <Text weight={500}>
            <b>Volume Total 24H (USD): {'   '}</b>
            {token?.tradeVolume ? `$${displayNumber(token?.tradeVolume)}` : 'N/A'}
          </Text>
          <Text weight={500}>
            <b>Reserve (Token): {'   '}</b>
            {token?.totalLiquidityToken
              ? `${displayNumber(token?.totalLiquidityToken)} ${token.symbol}`
              : 'N/A'}
          </Text>
          <Text weight={500}>
            <b>Reserve (USD): {'   '}</b>
            {token.totalLiquidityUSD ? `${displayNumber(token.totalLiquidityUSD)} $` : 'N/A'}
          </Text>
        </Stack>
      </Card.Section>
    </Card>
  );
};

export default TokenStatisticCard;
