import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        const payload = {
          username: credentials.username,
          password: credentials.password,
        };

        const res = await fetch("https://fullstack.exercise.applifting.cz/login", {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
            "X-API-KEY": credentials.apiKey,
          },
        });

        const user = await res.json();

        if (user) {
          return user;
        }

        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        if (user.access_token) {
          token = {
            accessToken: user.access_token,
            maxAge: user.expires_in,
          };
        }
      }

      return token;
    },
    async session({ session, user, token }) {
      session.accessToken = token.accessToken;
      //add user details info
      session.user = {
        name: "ABC",
      };

      return session;
    },
  },
  secret: "INp8IvdIyeMcoGAgFGoA61DdBglwwSqnXJZkgz8PSnw",
  jwt: {
    secret: "INp8IvdIyeMcoGAgFGoA61DdBglwwSqnXJZkgz8PSnw",
    encryption: true,
  },
});
