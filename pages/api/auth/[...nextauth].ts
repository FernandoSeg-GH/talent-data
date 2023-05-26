import clientPromise from '@/utils/connectDB';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    })
  ],
  // callbacks: {
  //   async session({ session } : any) {
  //     // store the user id from MongoDB to session
  //     // const sessionUser = await User.findOne({ email: session.user.email });
  //     // session?.user?.id = sessionUser._id.toString();

  //     return session;
  //   }
  // }
  // callbacks: {
  //   session({ session, token, user }) {
  //     return session // The return type will match the one returned in `useSession()`
  //   },
  // },
}

export default NextAuth(authOptions);