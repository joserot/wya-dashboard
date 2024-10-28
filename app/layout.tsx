import { Toaster } from '@/components/ui/toaster';

import './globals.css';

export const metadata = {
  title: 'Dashboard Wiede y Asociados',
  description: '',
  icons: ['/logo.jpeg']
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <Toaster />
      <body className="flex min-h-screen w-full flex-col">{children}</body>
    </html>
  );
}
