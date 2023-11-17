import '@/styles/global.css';

import type { AppProps } from 'next/app';
import { Fahkwang, Mulish } from 'next/font/google';

const fahkwang = Fahkwang({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--font-fahkwang',
});

const mulish = Mulish({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap',
  variable: '--font-mulish',
});

const MyApp = ({ Component, pageProps }: AppProps) => (
  <main className={`${fahkwang.variable} ${mulish.variable}`}>
    <Component {...pageProps} />
  </main>
);

export default MyApp;
