import { useState, MouseEvent } from 'react';

export const useNavbarMenu = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const handleNavMenu = (event: MouseEvent<HTMLElement>) => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return {
    isDrawerOpen,
    handleNavMenu
  };
};
