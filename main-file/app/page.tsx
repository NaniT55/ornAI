// import React from "react";
// import type { Metadata } from "next";
// import ScrollToTopButton from "@/component/utils/ScrollToTopButton";
// import VideoModal from "@/component/modal/VideoModal";
// import FooterSection2 from "@/component/footer/FooterSection2";
// import BlogSection2 from "@/component/blog/BlogSection2";
// import ActivitySection2 from "@/component/activity/ActivitySection2";
// import ContactSection2 from "@/component/contact/ContactSection2";
// import TeamSection from "@/component/team/TeamSection";
// import CounterSection from "@/component/counter/CounterSection";
// import CourseSection2 from "@/component/course/CourseSection2";
// import ContactSection from "@/component/contact/ContactSection";
// import AboutSection3 from "@/component/about/AboutSection3";
// import CategorySection3 from "@/component/category/CategorySection3";
// import BannerSection3 from "@/component/banner/BannerSection3";
// import NavbarSection from "@/component/navbar/NavbarSection";
// import TopbarSection from "@/component/topbar/TopbarSection";
// import NewNavbar from "@/component/navbar/NewNavbar";
// import FaqSection from "@/component/faq/FaqSection";
// import { CourseData } from "@/Data/CourseData";
// import { FaqData } from "@/Data/faqData";
// import { categoryMockData } from "@/Data/CategoryData";
// import { ActivityData } from "@/Data/activityData";
// // import ExploreORNAI from "@components/exploreornai/ExploreORNAI";

// import {
//   ActivityType,
//   BlogType,
//   CategoryType,
//   CourseType,
//   TeamType,
// } from "@/types";
// import {
//   getActivity,
//   getBlog,
//   getCategory,
//   getCourse,
//   getTeam,
// } from "@/sanity/sanity.query";

// export const metadata: Metadata = {
//   title: "ORN - AI ",
//   description: "Developed by Vlack Solutions",
// };

// const page = async () => {
//   const teamData: TeamType[] = await getTeam();
//   const activityData: ActivityType[] = await getActivity();
//   const blogData: BlogType[] = await getBlog();
//   const categoryData: CategoryType[] = await getCategory();
//   const courseData: CourseType[] = await getCourse();

//   return (
//     <div className="home_3">
//       {/* <TopbarSection style="tf__topbar tf__topbar_2" /> */}
//       {/* <NavbarSection style="main_menu_3" logo="images/logo3.png" /> */}
//       <div className="nav-banner">
//         <NewNavbar />
//         <BannerSection3 />
//       </div>
//       {categoryData && <CategorySection3 categoryData={categoryMockData} />}
//       {/* <ExploreORNAI /> */}
//       <AboutSection3 style="about_3" />
//       {/* <CounterSection /> */}
//       {/* <ContactSection /> */}

//       {courseData && <CourseSection2 courseData={CourseData} />}
//       {activityData && (
//         <ActivitySection2
//           style="tf__activities_3 tf__activities_slider_area mt_100 pt_95 pb_100"
//           activityData={ActivityData}
//         />
//       )}

//       {/* {teamData && <TeamSection style="tf__team_3 pt_250 pb_100" teamData={teamData}/>} */}
//       {/* <ContactSection2 /> */}
//       <FaqSection
//         img="images/faqs.jpg"
//         faqData={FaqData}
//         faqTitle="Why ORN-AI ?"
//         faqSubHead=""
//         faqDescription=""
//       />

//       {/* {blogData && <BlogSection2 blogData={blogData}/>} */}
//       <FooterSection2 style="tf__footer_3" logo="images/footer_logo3.png" />

//       <VideoModal />
//       <ScrollToTopButton style="style-3" />
//     </div>
//   );
// };

// export default page;

import React from "react";
import type { Metadata } from "next";
import ClientWrapper from "./ClientWrapper"; // Import the client wrapper
import {
  getActivity,
  getBlog,
  getCategory,
  getCourse,
  getTeam,
} from "@/sanity/sanity.query";
import { servicesData } from "@/Data/franchisePartnerData";

export const metadata: Metadata = {
  title: "ORN - AI ",
  description: "Developed by Vlack Solutions",
};

const Page = async () => {
  const teamData = await getTeam();
  const activityData = await getActivity();
  const blogData = await getBlog();
  const categoryData = await getCategory();
  const courseData = await getCourse();
 

  return (
    <ClientWrapper // Pass data to the client component
      teamData={teamData}
      activityData={activityData}
      blogData={blogData}
      categoryData={categoryData}
      courseData={courseData}
      serviceData={servicesData}
    />
  );
};

export default Page;
