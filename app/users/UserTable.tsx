import Link from 'next/link';
import React from 'react';
import { sort } from 'fast-sort';


interface User {
    id: number;
    name: string;
    email: string;
}

interface Props {
    sortOrder: string;
}

const UserTable = async ({sortOrder}: Props) => {
    const res = await fetch(
        'https://jsonplaceholder.typicode.com/users', 
        { next: { revalidate: 10 }});
    const users: User[] = await res.json();
    const sortedUsers =  sort(users).asc(sortOrder === 'email' ? (user) => user.email : (user) => user.name)

  return (
    <div className="w-1/2 overflow-x- rounded-box border border-base-content/5 bg-base-100">
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th><Link href='/users?sortOrder=name'>Name</Link></th>                    
                    <th><Link href='/users?sortOrder=email'>Email</Link></th>
                </tr>
            </thead>
            <tbody>
                {sortedUsers.map(user => <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    </tr>)}
            </tbody>
            
        </table>
    </div>
  )
}

export default UserTable