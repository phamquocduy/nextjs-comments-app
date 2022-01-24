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

        const res = await fetch(`${process.env.API_URL}/login`, {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
            "X-API-KEY": credentials.apiKey,
          },
        });

        const user = await res.json();

        if (user) {
          return {
            ...user,
            // pass username + apiKey down to callbacks
            username: credentials.username,
            apiKey: credentials.apiKey,
          };
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
            ...user,
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
      session.user = { username: token.username };
      session.apiKey = token.apiKey;

      return session;
    },
  },
  secret: "INp8IvdIyeMcoGAgFGoA61DdBglwwSqnXJZkgz8PSnw",
  jwt: {
    secret: "INp8IvdIyeMcoGAgFGoA61DdBglwwSqnXJZkgz8PSnw",
    encryption: true,
  },
});
