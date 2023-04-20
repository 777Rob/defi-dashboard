import {
  Text,
  AppShell as AppShellMantine,
  Navbar,
  Header,
  Footer,
  Stack,
  Aside,
  Box,
  Group,
  Divider,
  Button,
} from '@mantine/core';
import React from 'react';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import {
  IconBrandFoursquare,
  IconDashboard,
  IconHelp,
  IconLayoutGrid,
  IconSettings,
  IconSquareF1,
  IconSquareRoot,
  IconSquaresDiagonal,
  IconSquaresFilled,
} from '@tabler/icons';
import { IconSquareRoundedLetterS } from '@tabler/icons-react';

const AppShell = ({ children }: { children: React.ReactNode }) => (
  <AppShellMantine
    navbarOffsetBreakpoint="sm"
    asideOffsetBreakpoint="sm"
    navbar={
      <Navbar px="sm" hiddenBreakpoint="sm" py="md" width={{ sm: 150, lg: 250 }}>
        <Group position="apart">
          <Text weight="bold" size="xl">
            DeFi Dashboard
          </Text>
          <ColorSchemeToggle />
        </Group>
        <Divider mt="sm" mb="xl" orientation="horizontal" />
        <Button.Group orientation="vertical" sx={{ rowGap: '10px' }}>
          {/*  */}
          <Button
            fullWidth={true}
            sx={{ alignItems: 'flex-start' }}
            leftIcon={<IconLayoutGrid />}
            styles={{
              inner: {
                justifyContent: 'flex-start',
              },
            }}
            variant="light"
            size="lg"
          >
            Dashboard
          </Button>
          <Button
            styles={{
              inner: {
                justifyContent: 'flex-start',
              },
            }}
            fullWidth={true}
            leftIcon={<IconHelp />}
            variant="light"
            size="lg"
          >
            Documentation
          </Button>
          <Button
            styles={{
              inner: {
                justifyContent: 'flex-start',
              },
            }}
            fullWidth={true}
            leftIcon={<IconSettings />}
            variant="light"
            size="lg"
          >
            Settings
          </Button>
        </Button.Group>
      </Navbar>
    }
  >
    {children}
  </AppShellMantine>
);

export default AppShell;
