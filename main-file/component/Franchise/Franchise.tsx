"use client";
import React from "react";
import { MdArrowRight } from "react-icons/md";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import { RiArrowRightSLine } from "react-icons/ri";
import Link from "next/link";
import { FranchiseData } from "@/Data/FranchiseData";
import { CourseData } from "@/Data/CourseData";
import { ActivityData } from "@/Data/activityData";
import ActivitySection2 from "../activity/ActivitySection2";
import CourseSection2 from "../course/CourseSection2";
import Franchise2 from "./Franchise2";
import PopularServiceSection2 from "../service/PopularServiceSection2";
import { servicesData } from "@/Data/franchisePartnerData";

const Franchise = () => {
  return (
    <main className="main-franchise">
      <section className="franchise__banner tf__banner_3">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-md-10 col-lg-8">
              <div className="tf__banner_text wow fadeInUp">
                {/* <h5>Welcome to ORN-AI</h5> */}
                <h1>
                  Train <span>Locally</span> <br /> Excel <span>Globally</span>
                </h1>
                <p>
                  At ORN-AI, we're redefining career development by combining
                  world-class training with a 100% Placement Guarantee. With
                  over a decade of proven global expertise through Aguila
                  Consulting, our Franchise Model empowers you to transform
                  lives while building a successful business.
                </p>
                <ul className="d-flex flex-wrap align-items-center">
                  <li>
                    <Link className="common_btn_3" href="/courses">
                      Apply for a Franchise
                    </Link>
                  </li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {servicesData && <PopularServiceSection2 services={servicesData} />}

      <section className="section4">
        <div className="">
          <h1 className="heading">Our Franchise Model</h1>
        </div>
        <div className="benifit-div">
          <div className="benifits benifits1">
            <h1>Exclusive Territory Rights</h1>
            <p>
              Be the sole ORN-AI franchise in your region, capturing local
              markets with cutting-edge training and placement services.
            </p>
          </div>
          <div className="benifits benifits4">
            <h1>Exclusive Territory Rights</h1>
            <p>
              Be the sole ORN-AI franchise in your region, capturing local
              markets with cutting-edge training and placement services.
            </p>
          </div>
          <div className="benifits benifits1">
            <h1>Exclusive Territory Rights</h1>
            <p>
              Be the sole ORN-AI franchise in your region, capturing local
              markets with cutting-edge training and placement services.
            </p>
          </div>
          <div className="benifits benifits4">
            <h1>Exclusive Territory Rights</h1>
            <p>
              Be the sole ORN-AI franchise in your region, capturing local
              markets with cutting-edge training and placement services.
            </p>
          </div>
        </div>
      </section>

      {/* <section className="section5">
        <div className="cards-container">
          {FranchiseData.map((step) => (
            <div key={step._id} className="card">
              <h2 className="card-title">{step.title}</h2>
              <p className="card-description">{step.desc}</p>
            </div>
          ))}
        </div>
      </section> */}

      <section>
        {/* {CourseData && <CourseSection2 courseData={CourseData} />} */}
        {FranchiseData && (
          <Franchise2
            style="tf__activities_3 tf__activities_slider_area mt_100 pt_95 pb_100"
            franchiseData={FranchiseData}
          />
        )}
      </section>
    </main>
  );
};

export default Franchise;
