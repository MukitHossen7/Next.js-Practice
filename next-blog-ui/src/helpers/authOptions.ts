import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
  interface User {
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          console.error("Email and Password missing");
          return null;
        }

        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_API}/auth/login`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: credentials.email,
                password: credentials.password,
              }),
            }
          );

          if (!res.ok) {
            console.error("Login failed", await res.text());
            return null;
          }

          const user = await res.json();
          if (user?.data?.id) {
            return {
              id: user.data.id,
              name: user.data.name,
              email: user.data.email,
              image: user.data.picture,
            };
          }
          return null;
        } catch (error) {
          console.error("Authorize error", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      try {
        if (!user?.email) return false;
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API}/auth/google`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: user.name,
              email: user.email,
              image: user.image,
              provider: account?.provider,
              providerId: account?.providerAccountId,
            }),
          }
        );
        if (!res.ok) {
          console.error("Failed to save user in backend", await res.text());
          return false;
        }
        const data = await res.json();
        user.id = data?.data?.id;
        return true;
      } catch (error) {
        console.error("Error saving user:", error);
        return false;
      }
    },
    async jwt({ token, user }) {
      if (user && user.id) {
        token.id = user?.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token?.id as string;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};
