import { Group, Navbar as MantineNavbar, Text, Button, Divider } from '@mantine/core';
import React from 'react';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import { IconHelp, IconLayoutGrid, IconSettings } from '@tabler/icons';
import { NavButton } from './NavButton';

const Navbar = () => {
  return (
    <MantineNavbar px="sm" hiddenBreakpoint="sm" py="md" width={{ sm: 150, lg: 250 }}>
      <Group position="apart">
        <Text weight="bold" size="xl">
          DeFi Dashboard
        </Text>
        <ColorSchemeToggle />
      </Group>
      <Divider mt="sm" mb="xl" orientation="horizontal" />
      <Button.Group orientation="vertical" sx={{ rowGap: '10px' }}>
        <NavButton href="/" icon={<IconLayoutGrid />}>
          Dashboard
        </NavButton>
        <NavButton href="/documentation" icon={<IconHelp />}>
          Documentation
        </NavButton>
        <NavButton href="/settings" icon={<IconSettings />}>
          Settings
        </NavButton>
      </Button.Group>
    </MantineNavbar>
  );
};

export default Navbar;
