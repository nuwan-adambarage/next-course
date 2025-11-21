import React from 'react'
import UserNotFound from './not-found';

interface Props {
    params: {
        id: number;
    }
}

const UserDetailsPage = ({ params }: Props) => {
  if (params.id > 10) {
    return <UserNotFound />
  }
  return (
    <div>UserDetailsPage: {params.id}</div>
  )
}

export default UserDetailsPage