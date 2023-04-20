import { AppShell as AppShellMantine } from '@mantine/core';
import React from 'react';
import Navbar from '../Navbar/Navbar';

const AppShell = ({ children }: { children: React.ReactNode }) => (
  <AppShellMantine navbarOffsetBreakpoint="sm" asideOffsetBreakpoint="sm" navbar={<Navbar />}>
    {children}
  </AppShellMantine>
);

export default AppShell;
