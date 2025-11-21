'use client';
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  const { status, data: session} = useSession();
  return (
    <div className='flex bg-slate-400 pt-3 pb-3 space-x-3'>
        <Link href='/' className='mr-5 ml-5'>Next.js</Link>
        <Link href='/users'>Users</Link>
        {status === 'unauthenticated' && <Link href='/api/auth/signin'>LogIn</Link>}
        {status === 'authenticated' && 
          <div>
            {session.user?.name}
            <Link href="/api/auth/signout" className='ml-3.5'>Sign out</Link>
          </div>
        }
        {status === 'loading' && <div>Loading...</div>}
        {status === 'unauthenticated' && <Link href='/register'>Register</Link>}
    </div>
  )
}

export default NavBar