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
            async authorize(credentials, req) {
              console.log("credentials", credentials);
              return null
            }
          })
    ]

}

export default options

