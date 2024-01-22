import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

const options : NextAuthOptions ={
    providers :[
        CredentialsProvider({
            name: 'signin',
            credentials: {
              username: { label: "Username", type: "text", placeholder: "jsmith" },
              password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
              console.log("credentials", credentials);
              const response =  await fetch("https://jsonplaceholder.typicode.com/users/1");
              const user = await  response.json();
              console.log({user});
              return user||null;
            },
          }),      
    ],
    // callbacks:{
    //   async jwt({ token, account, profile }) {
    //     // Persist the OAuth access_token and or the user id to the token right after signin
    //     console.log({token, account, profile});
    //     return token
    //   },

    //   async session(req){
    //     console.log("ression", req);
    //     return req.session;

    //   }
    // },

    pages:{
       signIn:"/login"
    },

    secret:"Mehak"


    

}

export default options

