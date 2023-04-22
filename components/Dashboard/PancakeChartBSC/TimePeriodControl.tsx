import { Button, Text } from '@mantine/core';

const TimePeriodControl = ({ setTimePeriod }: { setTimePeriod: (period: number) => void }) => {
  return (
    <Button.Group
      style={{ display: 'flex', justifyContent: 'center', margin: '0 auto', columnGap: '10px' }}
    >
      <Button
        onClick={() => {
          setTimePeriod(7);
        }}
      >
        <Text weight={700} size="sm">
          7 Days
        </Text>
      </Button>

      <Button
        onClick={() => {
          setTimePeriod(30);
        }}
      >
        <Text weight={700} size="sm">
          30 Days
        </Text>
      </Button>

      <Button
        onClick={() => {
          setTimePeriod(90);
        }}
      >
        <Text weight={700} size="sm">
          90 Days
        </Text>
      </Button>
    </Button.Group>
  );
};
