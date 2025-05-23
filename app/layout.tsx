import './globals.css';
import { Poppins } from 'next/font/google';
import Navbar from '@/components/Navbar';
import ThemeToggle from '@/components/ThemeToggle';
import { Toaster } from 'react-hot-toast';

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Portfolio | Anushka Jadhav',
  description: 'Professional portfolio of Anushka Jadhav, a Web Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" 
        />
      </head>
      <body className={poppins.className} data-theme='light'>
        <div className="flex min-h-screen">
          <Navbar />
          <div className="flex-1 relative overflow-y-auto pb-16 md:pb-0">
            {children}
            <Toaster position="top-center" reverseOrder={false} />
            <ThemeToggle />
          </div>
        </div>
      </body>
    </html>
  );
}