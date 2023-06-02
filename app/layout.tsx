import { Inter } from 'next/font/google';
import Navbar from './components/Navbar/Navbar';
import './globals.css';
import { Providers } from './providers';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'David Goehring',
  description: 'Los Angeles Video Editor',
  keywords: 'Editor, Videographer, Video Editor, Film Editor',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
