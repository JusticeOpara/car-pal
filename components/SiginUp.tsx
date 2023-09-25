"use client"

import firebase from '../firebase/firebaseConfig'
import React, { useState, useEffect } from 'react'
import { useDispatch } from "react-redux"
import { setLoading, setUser } from '../redux/authSlice'
import { useRouter } from "next/router";



const SiginUp = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [blankError, setBlankError] = useState("")
  const [invaildEmail, setInvaildEmail] = useState("")

  const Router = useRouter()

  const dispatch = useDispatch()

  useEffect(()=>{
  if(typeof window !== "undefined"){

   const storedUser = localStorage.getItem('user')

   const parsedUser = storedUser ? JSON.parse(storedUser) : null

   dispatch(setUser({email:parsedUser?.email || null}))

  }
  },[dispatch])



  const handleSigup = async (e: React.MouseEvent<HTMLButtonElement>) => {

    e.preventDefault
    try {
      dispatch(setLoading(true))
      if (!email || !password) {
        setBlankError("pLEASE PROVIDE BOTH EMAIL AND PASSWORD")
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
      if (!emailRegex.test(email)) {
        setInvaildEmail("please provide a vaild email")
      }
      const response = await firebase.auth().createUserWithEmailAndPassword(email, password)
      setEmail("")
      setPassword("")
      if (response.user) {
        const user = {
          email: response.user.email
        }
        await response.user.sendEmailVerification()
        localStorage.setItem('user', JSON.stringify(user))
      }
      dispatch(setUser(user))
      Router.push('/')

    } catch (error) {
      const typeError = error as Error
      dispatch(setError(typeError.message))
    } finally {
      dispatch(setLoading(false))
    }
  }


  return (
    <div className='w-full h-screen flex  justify-center items-center'>
      <h1>SiginUp</h1>
      <input type='Email' className='' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
      {blankError && <div className='text-red-500'>{blankError}</div>}
      {invaildEmail && <div>{invaildEmail}</div>}

      <input type='Password' className='' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
      {blankError && <div className='text-red-500'>{blankError}</div>}
      <button onClick={handleSigup} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">SignUp</button>
    </div>
  )
}

export default SiginUp