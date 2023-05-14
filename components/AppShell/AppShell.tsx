import { AppShell as AppShellMantine } from '@mantine/core';
import React from 'react';
import Navbar from '../Navbar/Navbar';

const AppShell = ({ children }: { children: React.ReactNode }) => (
  <AppShellMantine
    styles={(theme) => ({
      main: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2],
      },
    })}
    navbarOffsetBreakpoint="sm"
    asideOffsetBreakpoint="sm"
    navbar={<Navbar />}
  >
    {children}
  </AppShellMantine>
);

export default AppShell;
