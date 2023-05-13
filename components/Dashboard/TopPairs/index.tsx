import { Card, Pagination, Skeleton } from '@mantine/core';
import React, { useState } from 'react';
import useTopTokens from 'hooks/useTopTokens';
import { TRow } from './TRow';
import { SortableField, SortOrder, sortData, THead } from './THead';
import useTopPairs from 'hooks/useTopPairs';

const TopPairs = () => {
  const { loading, data } = useTopPairs();
  console.log(data);
  const [sortBy, setSortBy] = useState<SortableField>('dailyTxns');

  const [sortOrder, setSortOrder] = useState<SortOrder>({
    dailyTxns: 'desc',
    dailyVolumeUSD: 'desc',
    reserveUSD: 'desc',
  });

  const [activePage, setPage] = useState(1);

  const handleSortChange = (newSortBy: SortableField) => {
    setSortBy(newSortBy);
    setSortOrder((prevOrder) => ({
      ...prevOrder,
      [newSortBy]: prevOrder[newSortBy] === 'desc' ? 'asc' : 'desc',
    }));
  };

  const sortedData = data ? sortData([...data], sortBy, sortOrder) : [];

  return (
    <Card>
      <Skeleton visible={loading} mih={400}>
        <Card.Section px="lg">
          <THead onSortChange={handleSortChange} />
          {sortedData &&
            sortedData.length > 0 &&
            sortedData
              .slice(activePage * 10 - 10, activePage * 10)
              .map((pair: any) => <TRow {...pair} />)}
          <Pagination position="center" mt="md" value={activePage} onChange={setPage} total={5} />
        </Card.Section>
      </Skeleton>
    </Card>
  );
};

export default TopPairs;
