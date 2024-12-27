"use client"; // Mark as a client component

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
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
import { CourseData } from "@/Data/CourseData";
import { FaqData } from "@/Data/faqData";
import { categoryMockData } from "@/Data/CategoryData";
import { ActivityData } from "@/Data/activityData";
import UserDetailsForm from "@/component/UserDetailsForm/UserDetailsForm";
import PopularServiceSection from "@/component/service/PopularServiceSection";
import NavbarSection2 from "@/component/navbar/NavbarSection2";
import { ActivityType, BlogType, CategoryType, CourseType, ServiceType, TeamType } from "@/types";

interface ClientWrapperProps {
  teamData: TeamType[];
  activityData: ActivityType[];
  blogData: BlogType[];
  categoryData: CategoryType[];
  courseData: CourseType[];
  serviceData: ServiceType[];
}

const ClientWrapper: React.FC<ClientWrapperProps> = ({
  teamData,
  activityData,
  blogData,
  categoryData,
  courseData,
  serviceData,
}) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const router = useRouter();

  // Show popup after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupVisible(true);
    }, 2000);
    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  // Redirect logic based on token
  useEffect(() => {
    const token = localStorage.getItem("jwtToken");

    if (!token) {
      router.push("/"); // Stay on '/' if no token
    } else {
      router.push("/"); // Redirect to '/home' if token exists
    }
  }, [router]);

  return (
    <div className="home_3">
      {/* <NavbarSection2 /> */}
      {/* <div className="nav-banner"> */}
        <NewNavbar />
        <BannerSection3 />
      {/* </div> */}
      {isPopupVisible && (
        <UserDetailsForm onClose={() => setIsPopupVisible(false)} />
      )}
      {categoryData && <CategorySection3 categoryData={categoryMockData} />}
      <AboutSection3 style="about_3" />
      {courseData && <CourseSection2 courseData={CourseData} />}
      {activityData && (
        <ActivitySection2
          style="tf__activities_3 tf__activities_slider_area mt_100 pt_95 pb_100"
          activityData={ActivityData}
        />
      )}
      <FaqSection
        img="images/faqs.jpg"
        faqData={FaqData}
        faqTitle="Why ORN-AI?"
        faqSubHead=""
        faqDescription=""
      />
      {serviceData && <PopularServiceSection serviceData={serviceData} />}
      <FooterSection2 style="tf__footer_3" logo="images/footer_logo3.png" />
      <VideoModal />
      <ScrollToTopButton style="style-3" />
    </div>
  );
};

export default ClientWrapper;

