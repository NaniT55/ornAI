import React from 'react'
import type { Metadata } from 'next'
import Layout from '@/component/layout/Layout'
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import LoginSection from '@/component/authentication/LoginSection'

export const metadata: Metadata = {
    title: "ORN-AI LOGIN",
    description: "Developed by Vlack Solutions",
  }
const page = () => {
  return (
    <Layout>
        {/* <BreadcrumbSection title='Sign In' header='Sign In'/> */}
        <LoginSection/>
    </Layout>
  )
}

export default page