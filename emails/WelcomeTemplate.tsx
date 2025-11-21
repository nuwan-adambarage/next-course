import React from 'react'
import { Html, Body, Container, Text, Preview, Link, Tailwind } from '@react-email/components'

interface Props {
    name: string;
}

const WelcomeTemplate = ( { name }: Props) => {
  return (
    <Html>
        <Tailwind>
            <Preview>Welcome to our service!</Preview>
            <Body>
                <Container>
                    <Text className='font-bold blur-xl text-5xl'>Hello {name},</Text>
                    <Text className='text-3xl'>Welcome to our service! We're glad to have you on board.</Text>
                    <Link className='text-amber-400' href="https://www.google.com">Google</Link>
                </Container>
            </Body>      
        </Tailwind>
    </Html>    
  )
}

export default WelcomeTemplate