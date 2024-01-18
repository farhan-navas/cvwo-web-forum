import viteLogo from '/vite.svg'
import { Link } from "react-router-dom"
import { useState } from 'react'
import Header from '@/components/Header'

export default function Login() {
    const defaultFormData = {
        email: "",
        password: ""
    }
    const [formData, setFormData] = useState(defaultFormData)

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData({...formData, [name]: value})
    } 

    async function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
        
        setFormData(formData)
    }

    return (
        <div>
            <Header />

            <div className='flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8'>
                <div className='sm:mx-auto sm:w-full sm:max-w-md'>
                    <Link to="/">
                        <img className='mx-auto h-12 w-auto' src={viteLogo} alt="logo" />
                    </Link>
                    <h2 className='mt-6 text-center text-3xl font-extrabold'>
                        Login to your account
                    </h2>
                </div>
            </div>

            <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
                <div className='bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10'>
                    <form className='space-y-6' onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor='Email' className='block text-sm font-medium text-gray-700'>
                                Email Adress
                            </label>
                            <div className='mt-1'>
                                <input 
                                    id='email' 
                                    name='email' 
                                    type='email' 
                                    autoComplete='email' 
                                    onChange={handleChange}
                                    required
                                    className='flex w-full appearance-none rounded-md border border-gray-300 px-4 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
                                Password 
                            </label>
                            <div className='mt-1'>
                                <input 
                                    id='password' 
                                    name='password' 
                                    type='password' 
                                    autoComplete='current-password' 
                                    onChange={handleChange}
                                    required
                                    className='flex w-full appearance-none rounded-md border border-gray-300 px-4 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                                />
                            </div>
                        </div>

                        <div>
                            <button 
                                type='submit'
                                className='block-w-full justify-center rounded-md border border-transparent bg-blue-600 px-10 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-blue-800 focus:ring-offset-2'
                            >
                                Login
                            </button>
                        </div>

                        <div className='text-center text-sm'>
                            Or{" "}
                            <Link to="/signup" className='font-medium text-blue-600 hover:text-blue-700'>
                                Create an account
                            </Link> 
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
