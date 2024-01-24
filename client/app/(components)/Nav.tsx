"use client"
import React from 'react'
import Link from 'next/link';
import { useSession } from 'next-auth/react';

export const Nav = () => {
    const {data:session} = useSession();
    console.log({session});
    
  return (
    <div>
        {session ? <>You have a sessin</>: <Link href= "/login"> login</Link>}
    </div>
  )
}
