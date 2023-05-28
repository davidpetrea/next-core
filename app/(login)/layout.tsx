import './globals.css';
import { Rubik } from 'next/font/google';

const inter = Rubik({ subsets: ['latin'] });

export const metadata = {
  title: 'Login | Next Core',
  description: 'The Next Core chatting experience.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
