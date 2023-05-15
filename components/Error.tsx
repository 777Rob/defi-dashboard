import { Card, Text, Button } from '@mantine/core';
import { Chains } from 'utils/chain';
import { useRouter } from 'next/router';
import { useChain } from 'hooks/useChain';

const Error = () => {
  const router = useRouter();
  const { chain, setChain } = useChain();
  return (
    <Card
      w="full"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '250px',
      }}
    >
      <Text
        sx={{
          fontSize: '50px',
        }}
        weight={700}
      >
        Error getting data
      </Text>
      <Button.Group orientation="vertical" sx={{ gap: 10 }}>
        <Button size="xl" onClick={() => router.push('/')}>
          Return To Dashboard
        </Button>
        <Button
          size="xl"
          onClick={() => {
            const newChain = chain == Chains.ETH ? Chains.BSC : Chains.ETH;

            setChain(newChain);
          }}
        >
          Try Different Chain
        </Button>
      </Button.Group>
    </Card>
  );
};

export default Error;
