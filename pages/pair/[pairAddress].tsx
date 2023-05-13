import AppShell from 'components/AppShell/AppShell';
import Pair from 'components/Pair/Pair';
import { useRouter } from 'next/router';

export default function PairPage() {
  const router = useRouter();
  const { pairAddress } = router.query;

  return (
    <>
      <AppShell>{pairAddress && <Pair pairAddress={pairAddress as string} />}</AppShell>
    </>
  );
}
