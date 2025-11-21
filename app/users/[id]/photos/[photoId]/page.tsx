import React from 'react'

interface Props {
    params: {      
      id: number;
      photoId: number;        
    }
}

const PhotoDetails = ({ params }: Props) => {
  return (
    <div>PhotoDetails - {params.id} / {params.photoId}</div>
  )
}

export default PhotoDetails