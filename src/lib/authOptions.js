import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect, { collectionName } from "./dbConnect";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GitHubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET
      }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.

      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { username, password } = credentials;
        const user = await dbConnect(collectionName.USER_DATA).findOne({
          name: username,
        });
        if (!user) {
          return null;
        }
        // Check if the email and password provided by the user is correct
        const isPasswordOK = password === user.password;

        console.log("Credentials", user);
        if (isPasswordOK) {
          return user;
        } else return null;
      },
    }),
  ],
  callbacks: {
    async signIn({ user , account, profile, email, credentials }) {
        const {email:user_email,name,image} =user
        if(account){
            try {
                const {provider,providerAccountId}=account
                
               const payload = {provider,user_email,name,image,role:'user'}
               const userCollection = dbConnect(collectionName.USER_DATA)
               const user = await userCollection.findOne({providerAccountId})
               if(!user){
                await userCollection.insertOne(payload);
               }


            } catch (error) {
                console.log(error)
                return false;
                
            }
        }
        return true
      },
    
    async session({ session, token, user }) {
      if (token) {
        session.user.name = token.name;
        session.user.role = token.role;
      }
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.name = user.name;
        token.role = user.role;
      }

      return token;
    },
  },
};
