import { Card, Skeleton } from '@mantine/core';
import React, { useState } from 'react';
import useTopTokens from 'hooks/useTopTokensBSC';
import { TRow } from './TRow';
import { SortableField, SortOrder, sortData, THead } from './THead';

const TopTokensBSC = () => {
  const { loading, data } = useTopTokens();
  const [sortBy, setSortBy] = useState<SortableField>('name');
  const [sortOrder, setSortOrder] = useState<SortOrder>({
    name: 'desc',
    priceUSD: 'desc',
    liquidityUSD: 'desc',
    volumeUSD: 'desc',
  });

  const handleSortChange = (newSortBy: SortableField) => {
    setSortBy(newSortBy);
    setSortOrder((prevOrder) => ({
      ...prevOrder,
      [newSortBy]: prevOrder[newSortBy] === 'desc' ? 'asc' : 'desc',
    }));
  };

  const sortedData = data ? sortData(data, sortBy, sortOrder) : [];

  return (
    <Card>
      <Skeleton visible={loading} mih={400}>
        <Card.Section px="lg">
          <THead onSortChange={handleSortChange} />
          {sortedData.length > 0 && sortedData.map((token: any) => <TRow {...token} />)}
        </Card.Section>
      </Skeleton>
    </Card>
  );
};

export default TopTokensBSC;
