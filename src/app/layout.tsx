import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import { twMerge } from 'tailwind-merge';

const dmSans = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Zenlyft',
  description: 'Zenlyft is a platform for habit trackers.',
  keywords: ['Zenlyft', 'habit tracker', 'productivity', 'habit', 'tracker'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='relative'>
      <body className={twMerge(dmSans.className, 'antialiased bg-[#EAEEFE]')}>
        {children}
      </body>
    </html>
  );
}
