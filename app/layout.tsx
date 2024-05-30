import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import "./globals.css";
import WrappedClientLayout from '@/app/components/ClientLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'E-commerce',
  description: 'E-commerce app',
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <title>My E-commerce Site</title>
      <body className={inter.className}>
        <WrappedClientLayout>{children}</WrappedClientLayout>
      </body>
    </html>
  );
};

export default RootLayout;
