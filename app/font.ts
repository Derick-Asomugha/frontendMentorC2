// app/fonts.ts
import { Red_Hat_Text } from 'next/font/google';

export const redHatText = Red_Hat_Text({
  subsets: ['latin'],  // optional
  weight: ['400', '700'], // add more weights if you need
  variable: '--font-redhat',
  display: 'swap',
});
