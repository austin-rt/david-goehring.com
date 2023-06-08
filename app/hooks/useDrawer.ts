import { useState, MouseEvent } from 'react';

export const useDrawer = () => {
  const [isDrawerOpen, toggleIsDrawerOpen] = useState<boolean>(false);

  const toggleDrawer = (_evt: MouseEvent<HTMLElement>) => {
    toggleIsDrawerOpen(!isDrawerOpen);
  };

  return {
    isDrawerOpen,
    toggleDrawer,
  };
};
