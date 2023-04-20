import { useMantineColorScheme } from '@mantine/core';
import PancakeSwapLogoTextIconDark from './PancakeSwapLogoTextIconDark';
import PancakeSwapLogoTextIconWhite from './PancakeSwapLogoTextIconWhite';
import { SVGProps } from 'react';

const PancakeTextIcon = (props: SVGProps<SVGSVGElement>) => {
  const { colorScheme } = useMantineColorScheme();

  if (colorScheme === 'dark') {
    return <PancakeSwapLogoTextIconWhite {...props} />;
  } else {
    return <PancakeSwapLogoTextIconDark {...props} />;
  }
};

export default PancakeTextIcon;
