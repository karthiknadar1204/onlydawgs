import AuthScreen from '@/components/home/auth-screen/AuthScreen';
import HomeScreen from '@/components/home/home-screen/HomeScreen';
import React from 'react'

const page = () => {
  const user=false;
  return (
    <main>
      {user ? <HomeScreen/> : <AuthScreen/>}
    </main>
  )
}

export default page