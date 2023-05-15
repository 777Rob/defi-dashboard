import { Group, Navbar as MantineNavbar, Text, Button, Divider } from '@mantine/core';
import React from 'react';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import {
  IconAnalyze,
  IconChartBubble,
  IconDeviceDesktopAnalytics,
  IconHelp,
  IconLayoutGrid,
  IconSettings,
} from '@tabler/icons';
import { NavButton } from './NavButton';
import { IconChartBubbleFilled } from '@tabler/icons-react';

const Navbar = () => {
  return (
    <MantineNavbar px="sm" hiddenBreakpoint="sm" py="md" width={{ sm: 200, lg: 300 }}>
      <MantineNavbar.Section>
        <Group position="left" spacing="xs">
          <IconChartBubble size="45" color="#00abfb" />
          <Text weight="bold" size="xl">
            DeFi Dashboard
          </Text>
        </Group>
      </MantineNavbar.Section>

      <Divider mt="lg" mb="40px" orientation="horizontal" color="#00abfb" opacity={0.7} />

      <MantineNavbar.Section>
        <Button.Group orientation="vertical" sx={{ rowGap: '10px' }}>
          <NavButton href="/" icon={<IconLayoutGrid />}>
            Dashboard
          </NavButton>
          <NavButton href="https://github.com/777Rob/defi-dashboard" icon={<IconHelp />}>
            Documentation
          </NavButton>
        </Button.Group>
      </MantineNavbar.Section>

      <MantineNavbar.Section mb="0px" mt="auto">
        <Divider orientation="horizontal" color="#00abfb" opacity={0.7} />
        <Group position="apart" align="" spacing="xs" mt="lg">
          <Text size="lg" weight={700}>
            Toggle theme
          </Text>
          <ColorSchemeToggle />
        </Group>
      </MantineNavbar.Section>
    </MantineNavbar>
  );
};

export default Navbar;
