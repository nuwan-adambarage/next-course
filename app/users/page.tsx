import React from 'react'
import UserTable from './UserTable'
import Link from 'next/link'


interface Props {
    // Next.js may provide searchParams as a Promise in newer router versions.
    // Make it optional and allow sortOrder to be optional as well.
    searchParams?: Promise<{ sortOrder?: string }>;
}

const UsersPage = async ({ searchParams }: Props) => {
    // await the params (if provided) before accessing properties
    const params = searchParams ? await searchParams : { sortOrder: undefined };
    const sortOrder = params?.sortOrder ?? "asc";

  return (
    <>
    <h1>Users</h1>
    <Link href='/users/new' className='btn mb-2'>New User</Link>
      <UserTable sortOrder={sortOrder} />
    </>
  )
}

export default UsersPage