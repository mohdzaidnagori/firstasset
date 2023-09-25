"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const page = () => {
  const router = useRouter()
  useEffect(() => {
    router.push('/admin/all_users')
  },[])
  return (
    <div>loading...</div>
  )
}

export default page