import NextAuth from "next-auth/next";
import options from "./option";

const handler =  NextAuth(options);

console.log("handler is", handler);

export  { handler as GET, handler as POST};