'use client';
import React from 'react'

interface Props {
    error: Error;
    reset: () => void;
}

const ErrorPage = ({ error, reset }: Props) => {
    console.log('Error page', error);
  return (    
    <>    
    <div>Unexpected error occurred</div>
    <button className="btn" onClick={() => reset()}>Re-try</button>
    </>
  )
}

export default ErrorPage