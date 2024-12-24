import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import ContactPageSection from "@/component/contact/ContactPageSection";
import Layout from "@/component/layout/Layout";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Developed by Vlack Solutions",
};
const page = () => {
  return (
    <Layout>
      <BreadcrumbSection
        header="Contact Us"
        title="Contact us"
        showBackground={true}
      />
      <ContactPageSection />
    </Layout>
  );
};

export default page;
