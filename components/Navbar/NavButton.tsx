import { Button, Text } from '@mantine/core';
import React from 'react';
import { useRouter } from 'next/router';

export const NavButton = ({ children, href, icon }: any) => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <Button
      onClick={() => {
        router.push(href);
      }}
      fullWidth={true}
      sx={{ alignItems: 'flex-start' }}
      leftIcon={icon}
      // @TODO: Update Mantine to allow to align items with align prop
      styles={{
        inner: {
          justifyContent: 'flex-start',
        },
      }}
      variant={pathname == href ? 'filled' : 'subtle'}
      size="lg"
    >
      <Text weight={700}>{children}</Text>
    </Button>
  );
};
