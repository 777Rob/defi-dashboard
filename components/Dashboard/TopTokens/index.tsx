import { Card, Pagination, Skeleton } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import useTopTokens from 'hooks/useTopTokens';
import { TRow } from './TRow';
import { SortableField, SortOrder, sortData, THead } from './THead';
import { useChain } from 'hooks/useChain';

const TopTokens = () => {
  const { loading, data } = useTopTokens();
  const [sortBy, setSortBy] = useState<SortableField>('liquidityUSD');
  const [sortOrder, setSortOrder] = useState<SortOrder>({
    name: 'desc',
    priceUSD: 'desc',
    liquidityUSD: 'desc',
    volumeUSD: 'desc',
  });
  const [activePage, setPage] = useState(1);

  const { chain } = useChain();

  useEffect(() => {
    setPage(1);
  }, [chain]);

  const handleSortChange = (newSortBy: SortableField) => {
    setSortBy(newSortBy);
    setSortOrder((prevOrder) => ({
      ...prevOrder,
      [newSortBy]: prevOrder[newSortBy] === 'desc' ? 'asc' : 'desc',
    }));
  };

  const sortedData = data ? sortData(data, sortBy, sortOrder) : [];
  console.log(sortedData);
  return (
    <Card>
      <Skeleton visible={loading} mih={400}>
        <Card.Section px="lg">
          <THead onSortChange={handleSortChange} />
          {sortedData &&
            sortedData.length > 0 &&
            sortedData
              .slice(activePage * 10 - 10, activePage * 10)
              .map((token: any, index: number) => (
                <TRow
                  key={token.address}
                  {...token}
                  isFirst={index == activePage * 10 - 10}
                  isLast={index == activePage * 10 - 1}
                />
              ))}
          <Pagination
            position="center"
            mt="md"
            value={activePage}
            onChange={setPage}
            total={sortedData.length > 41 ? 5 : sortedData.length / 10}
          />
        </Card.Section>
      </Skeleton>
    </Card>
  );
};

export default TopTokens;
