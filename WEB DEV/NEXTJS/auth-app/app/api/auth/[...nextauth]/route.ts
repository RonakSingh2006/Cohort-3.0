import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
  CredentialsProvider({
    name: "Email",
    credentials: {
      username: { label: "Username", type: "text", placeholder: "ronak@gmail.com" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials) {

      const username = credentials?.username;
      const password = credentials?.password;

      console.log(username,password);

      const user = { id: "1", name: 'Temp', email: username }


      if (user) {
        return user
      } else {
        return null
      }
    }
  }),
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID || "",
    clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
  })
]
})

export { handler as GET, handler as POST }