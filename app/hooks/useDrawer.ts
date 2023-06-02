import { useState, MouseEvent } from 'react';

export const useDrawer = () => {
  const [isDrawerOpen, toggleIsDrawerOpen] = useState<boolean>(false);

  const toggleDrawer = (event: MouseEvent<HTMLElement>) => {
    toggleIsDrawerOpen(!isDrawerOpen);
  };

  return {
    isDrawerOpen,
    toggleDrawer,
  };
};
