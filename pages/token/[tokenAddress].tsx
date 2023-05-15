import AppShell from 'components/AppShell/AppShell';
import Token from 'components/Token/Token';
import { useRouter } from 'next/router';

export default function TokenPage() {
  const router = useRouter();
  const { tokenAddress } = router.query;

  return (
    <>
      <AppShell>{tokenAddress && <Token tokenAddress={tokenAddress as string} />}</AppShell>
    </>
  );
}
