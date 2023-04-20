import AppShell from '../components/AppShell/AppShell';
import Dashboard from '../components/Dashboard/Dashboard';

export default function HomePage() {
  return (
    <>
      <AppShell>
        <Dashboard />
      </AppShell>
    </>
  );
}
