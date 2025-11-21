'use client'
import React, { useState } from 'react'

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        const res = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const result = await res.json();
        console.log(result);
    }

  return (
    <form className="bg-sky-100 p-6 rounded-lg shadow-md space-y-4" onSubmit={handleSubmit}>

        <label className="block text-black font-bold">First Name</label>
        <input  type="text" name="name" placeholder="Name" onChange={handleChange} required/>

        <label className="block text-black font-bold">Email</label>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required/>

        <label className="block text-black font-bold">Password</label>
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required/>

        <button type="submit" className="btn btn-primary w-full">Register</button>
    </form>
  )
}

export default RegisterPage