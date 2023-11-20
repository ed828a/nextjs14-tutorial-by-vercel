import { Inter, Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});
//display: 'swap': This specifies that the font should be loaded with the font-display: swap CSS property, which ensures that text is displayed immediately with a fallback font while the Inter font is being loaded
