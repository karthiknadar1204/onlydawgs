import BaseLayout from '@/components/BaseLayout'
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components'
import React from 'react'
import UserProfile from './UserProfile'
import Posts from './Posts'

const HomeScreen = () => {
  return (
    <BaseLayout >
      <UserProfile/>
      <Posts 
      // admin={admin!} isSubscribed={user?.isSubscribed} 
      />
    </BaseLayout>
  )
}

export default HomeScreen