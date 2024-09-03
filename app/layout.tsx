import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
 
export const experimental_ppr = true; //added in chapter 10
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}