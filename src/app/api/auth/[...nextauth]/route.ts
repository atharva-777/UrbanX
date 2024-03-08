import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
import { NextAuthOptions, getServerSession } from "next-auth";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = {
          id: "42",
          name: "Atharva",
          email: "atharva@gmail.com",
          password: "new@123",
          image:
            "https://res.cloudinary.com/dq4vpg3fh/image/upload/v1692422087/Metamarket/_20230818_23345_sbytkn.png",
          orderHistory: {
            count: 5,
            amount: 25000,
          },
        };
        JSON.stringify(credentials);
        if (
          credentials?.email === user.email &&
          credentials?.password === user.password
        ) {
          console.log("here", user);
          return user;
        } else {
          console.log("error");
          return null;
        }
      },
    }),
  ],
  callbacks: {
    // async jwt({token,account,profile}) {
    //     if(account && account.type==='credentials'){
    //       token.userId = account.providerAccountId;
    //     }
    //     return token;
    // },
    // async session({session,token,user}) {
    //     session.user.id = token.userId;
    //     return session;
    // },
  },
  pages: {
    // signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET || "dsbfnfmsb346lm5",
  debug: false,
  session: {
    strategy: "jwt",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
export { authOptions };

export const getServerAuthSession = () => getServerSession(authOptions);
