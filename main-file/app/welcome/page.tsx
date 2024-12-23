import Layout from '@/component/layout/Layout';
import React from 'react';
import type { Metadata } from 'next';
import Welcome from './../../component/welcome/welcome';

export const metadata: Metadata = {
  title: "Welcome",
  description: "Developed by Vlack Solutions",
};

const Page = async () => {
  return (
    
      <Welcome />
    
  );
};

export default Page;
