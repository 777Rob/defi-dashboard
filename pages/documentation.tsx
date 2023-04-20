import { Button } from '@mantine/core';
import AppShell from '../components/AppShell/AppShell';
import Dashboard from '../components/Dashboard/Dashboard';
import Documentation from '../components/Documentation/Documentation';

export default function HomePage() {
  return (
    <>
      <AppShell>
        <Documentation />
      </AppShell>
    </>
  );
}
