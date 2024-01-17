import React from 'react'
import { getServerSession } from 'next-auth'
import Link from 'next/link';

export const Nav = async() => {
    const session = await getServerSession();
    console.log("session is", session);

  return (
    <div>
        {session ? <>You have a sessin</>: <Link href= "/api/auth/signin"> login</Link>}
    </div>
  )
}
