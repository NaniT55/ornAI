import Layout from "@/component/layout/Layout";
import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";

import React from "react";
import type { Metadata } from "next";
import Franchise from "@/component/Franchise/Franchise";

export const metadata: Metadata = {
  title: "Franchise",
  description: "Developed by Vlack Solutions",
};

const page = async () => {
  return (
    <Layout>
      {/* <BreadcrumbSection
        header="Franchise"
        title="Franchise"
        showBackground={false}
      /> */}
      {/* <section className="tf__about_us_page mt_195 xs_mt_100">
        <Franchise />
      </section> */}
      <Franchise />
    </Layout>
  );
};

export default page;
