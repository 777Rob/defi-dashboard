import { Card, Pagination, Skeleton } from '@mantine/core';
import React, { useState } from 'react';
import useTopTokens from 'hooks/useTopTokens';
import { TRow } from './TRow';
import { SortableField, SortOrder, sortData, THead } from './THead';

const TopTokens = () => {
  const { loading, data } = useTopTokens();
  const [sortBy, setSortBy] = useState<SortableField>('name');
  const [sortOrder, setSortOrder] = useState<SortOrder>({
    name: 'desc',
    priceUSD: 'desc',
    liquidityUSD: 'desc',
    volumeUSD: 'desc',
  });
  const [activePage, setPage] = useState(1);

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
          {sortedData.length > 0 &&
            sortedData
              .slice(activePage * 10 - 10, activePage * 10)
              .map((token: any) => <TRow {...token} />)}
          <Pagination position="center" mt="md" value={activePage} onChange={setPage} total={5} />
        </Card.Section>
      </Skeleton>
    </Card>
  );
};

export default TopTokens;
