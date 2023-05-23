import { createContext } from 'react';

type ThemeContextType = {
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  toggleTheme: () => {}
});
