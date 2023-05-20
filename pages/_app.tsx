import "@/styles/globals.css";
import type { AppProps } from "next/app";
import useAnalytics from "../lib/useAnalytics";
import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";
// import { AuthProvider, useAuth } from '@/lib/auth';
import Provider from "@/components/auth/Provider";
import { SessionProvider, useSession } from "next-auth/react";

function MyApp({ Component, pageProps }: AppProps) {
  const isAuthenticated = false; // Update this with the real authentication status
  const trackingId = "G-18CYMNQLH7"; // Replace with your Google Analytics tracking ID
  useAnalytics({ trackingId });

  return (
    // <ProtectedRoute isAuthenticated={isAuthenticated}>
    //   <AuthProvider>
    //   </AuthProvider>
    // </ProtectedRoute>
      // <SessionProvider session={session}>
        <Component {...pageProps} />
      // </SessionProvider>
  ) 
    
}

export default MyApp;
