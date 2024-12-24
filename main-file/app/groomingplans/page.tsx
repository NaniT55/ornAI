import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";

import Layout from "@/component/layout/Layout";

import React from "react";
import type { Metadata } from "next";
import ORNGroomingPlans from "@/component/groomingplans/groomingplans";
// import { ActivityType, BlogType, CourseType, FaqType, ServiceType } from '@/types'
// import { getActivity, getBlog, getCourse, getFaq, getService } from '@/sanity/sanity.query'

export const metadata: Metadata = {
  title: "Grooming Plans",
  description: "Developed by Vlack Solutions",
};
const page = async () => {
  //   const serviceData: ServiceType[] = await getService();
  //   const courseData: CourseType[] = await getCourse();
  //   const faqData: FaqType[] = await getFaq();
  //   const activityData: ActivityType[] = await getActivity();
  //   const blogData: BlogType[] = await getBlog();
  return (
    <Layout>
      <BreadcrumbSection header="Grooming Plans" title="Grooming Plans" />
      <section className="tf__about_us_page mt_195 xs_mt_100">
        <ORNGroomingPlans />
      </section>
    </Layout>
  );
};

export default page;
