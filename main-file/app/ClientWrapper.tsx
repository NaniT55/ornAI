"use client"; // Mark as a client component

import React, { useEffect } from "react";
import { useRouter } from "next/navigation"; // Next.js router
import ScrollToTopButton from "@/component/utils/ScrollToTopButton";
import VideoModal from "@/component/modal/VideoModal";
import FooterSection2 from "@/component/footer/FooterSection2";
import FaqSection from "@/component/faq/FaqSection";
import AboutSection3 from "@/component/about/AboutSection3";
import CourseSection2 from "@/component/course/CourseSection2";
import ActivitySection2 from "@/component/activity/ActivitySection2";
import CategorySection3 from "@/component/category/CategorySection3";
import BannerSection3 from "@/component/banner/BannerSection3";
import NewNavbar from "@/component/navbar/NewNavbar";
// import { CourseData, FaqData, categoryMockData, ActivityData } from "@/Data";
import { CourseData } from "@/Data/CourseData";
import { FaqData } from "@/Data/faqData";
import { categoryMockData } from "@/Data/CategoryData";
import { ActivityData } from "@/Data/activityData";

import {
  ActivityType,
  BlogType,
  CategoryType,
  CourseType,
  TeamType,
  ServiceType,
} from "@/types";
import {
  getActivity,
  getBlog,
  getCategory,
  getCourse,
  getTeam,
  getService,
} from "@/sanity/sanity.query";
import PopularServiceSection from "@/component/service/PopularServiceSection";

const ClientWrapper = ({
  teamData,
  activityData,
  blogData,
  categoryData,
  courseData,
  serviceData,
}) => {
  const router = useRouter();

  // Redirect logic
  useEffect(() => {
    const token = localStorage.getItem("jwtToken");

    if (!token) {
      router.push("/"); // Stay on '/' if no token
    } else {
      router.push("/home-2"); // Redirect to '/home' if token exists
    }
  }, [router]);

  return (
    <div className="home_3">
      <div className="nav-banner">
        <NewNavbar />
        <BannerSection3 />
      </div>
      {categoryData && <CategorySection3 categoryData={categoryMockData} />}
      <AboutSection3 style="about_3" />
      {courseData && <CourseSection2 courseData={CourseData} />}
      {activityData && (
        <ActivitySection2
          style="tf__activities_3 tf__activities_slider_area mt_100 pt_95 pb_100"
          activityData={ActivityData}
        />
      )}
      {/* {serviceData && <PopularServiceSection serviceData={serviceData} />} */}
      <FaqSection
        img="images/faqs.jpg"
        faqData={FaqData}
        faqTitle="Why ORN-AI?"
        faqSubHead={""}
        faqDescription={""}
      />
      {serviceData && <PopularServiceSection serviceData={serviceData} />}

      <FooterSection2 style="tf__footer_3" logo="images/footer_logo3.png" />
      <VideoModal />
      <ScrollToTopButton style="style-3" />
    </div>
  );
};

export default ClientWrapper;
