import { Inter } from "next/font/google";
import Navbar from "./components/Navbar/Navbar";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="Los Angeles Video Editor" />
        <meta
          name="keywords"
          content="Editor, Videographer, Video Editor, Film Editor"
        ></meta>
        <title>David Goehring</title>
      </head>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
