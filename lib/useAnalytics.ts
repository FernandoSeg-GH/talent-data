import { useEffect } from 'react';
import { useRouter } from 'next/router';

interface UseAnalyticsProps {
  trackingId: string;
}

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

const useAnalytics = ({ trackingId }: UseAnalyticsProps) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      window.gtag('config', trackingId, {
        page_path: url,
      });
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events, trackingId]);
};

export default useAnalytics;
