import BaseLayout from '@/components/BaseLayout'
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components'
import React from 'react'
import UserProfile from './UserProfile'

const HomeScreen = () => {
  return (
    <BaseLayout >
    <UserProfile/>
    </BaseLayout>
  )
}

export default HomeScreen