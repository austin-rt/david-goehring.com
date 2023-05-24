'use client';
import './globals.css';
import { ThemeProvider } from '@mui/material/styles';
import { ThemeContext } from './contexts/themeContext';
import { useThemeToggle } from './hooks/useThemeToggle';
import { getTheme } from './theme';
import CssBaseline from '@mui/material/CssBaseline';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar/Navbar';

const inter = Inter({ subsets: ['latin'] });

// export const metadata = {
//   title: 'David Goehring',
//   description: 'Los Angeles Video Editor'
// };

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const [mode, toggleTheme] = useThemeToggle();
  const theme = getTheme(mode);
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeContext.Provider value={{ toggleTheme }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar />
            {children}
          </ThemeProvider>
        </ThemeContext.Provider>
      </body>
    </html>
  );
}
