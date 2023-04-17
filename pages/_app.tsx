import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import useAnalytics from '../lib/useAnalytics';

function MyApp({ Component, pageProps }: AppProps) {
  const trackingId = 'G-18CYMNQLH7'; // Replace with your Google Analytics tracking ID
  useAnalytics({ trackingId });

  return <Component {...pageProps} />;
}

export default MyApp;
