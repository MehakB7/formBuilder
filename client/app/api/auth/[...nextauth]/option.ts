import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

const options : NextAuthOptions ={
   secret: process.env.NEXT_AUTH_SECRET,
    providers :[
        CredentialsProvider({
            name: 'credentials',
            credentials: {
              username: { label: "Username", type: "text", placeholder: "jsmith" },
              password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
              const response =  await fetch("https://jsonplaceholder.typicode.com/users/1");
              const user = await  response.json();
              return user||null;
             
            },
          }),      
    ],
    callbacks:{
      async jwt({ token, account, profile }) {
        console.log("jwt token");
        return token
      },

      async session(req){
        console.log("session");
        return req.session;

      }
    },

    pages:{
       signIn:"/login"
    },
}

export default options

