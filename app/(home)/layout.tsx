import Header from '@/components/home/Header';
import Sidebar from '@/components/home/Sidebar';

export const metadata = {
  title: 'Next Core ',
  description: 'The Next Core chatting experience.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='flex min-h-screen'>
      <Sidebar />
      <div className='flex flex-col flex-grow'>
        <Header />
        <div className='bg-neutral-900'>{children}</div>
      </div>
    </main>
  );
}
