import React, { useEffect, useState } from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
// import { useSession } from "next-auth/react";
// import { Session } from 'next-auth';
// import axios from 'axios';
import { Question } from '@/lib/types';
import { useSession } from 'next-auth/react';


type Props = {
  children: React.ReactNode;
  // stateVariabel?: string;
  questions?: Question[];
  user?: any;
};


function Layout({ children, questions, user }: Props) {
  const { data: session } = useSession();
  
//   const [userProfile, setUserProfile] = useState<Session | null>(null)


//   useEffect(() => {
//     if (!session) {
//       setUserProfile(null);
//       return;
//     } else {
//       console.log(session, "Nuevo log");
//       setUserProfile(session);
//     }
//   }, [session]);

//  useEffect(() => {
//   if (!session) {
//     console.log("No hay session");
//     return;

//   } else {
//     console.log(session, "Nuevo log");
//   }

//   }, [session])

  return (
    <>
    <main className={`relative flex flex-col items-start jutify-start w-[90%] max-w-[480px] mx-auto`} >
    {/* <main className={`relative flex flex-col items-start jutify-start w-[90%] max-w-[480px] mx-auto ${isDarkMode ? "dark" : ""}`} > */}
        {/* <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} session={session}/> */}
        <Navbar session={session} />
        {children}
        {/* <Footer /> */}
    </main>
    </>
  )
}

export default Layout
