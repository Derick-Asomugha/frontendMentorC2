// app/layout.tsx
import './globals.css';
import { CartProvider } from '@/cart-context';
import { redHatText } from './font';


export const metadata = {
  title: 'Frontend Mentor Product List with Cart',
  description: 'A product list page with shopping cart functionality built using Next.js and TypeScript.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={redHatText.variable} >
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
