"use client";
import React from "react";
import ActivitySlider from "../slider/ActivitySlider";
import { ActivityType } from "@/types";
import { FranchiseType } from "@/types";
import FranchiseSlider from "../slider/FranchiseSlider";

type Props = {
  style: string;
  franchiseData: FranchiseType[];
};

const Franchise2 = ({ style, franchiseData }: Props) => {
  return (
    <div className={style}>
      <div className="container">
        <div className="row wow fadeInUp">
          <div className="col-xl-6 col-xxl-5 col-md-8 col-lg-6 m-auto">
            <div className="tf__heading_area mb_15">
              <h2>How it works</h2>
              {/* <h2>We School Be Happy With Our Activities.</h2> */}
            </div>
          </div>
        </div>
        <FranchiseSlider FranchiseData={franchiseData} />
      </div>
    </div>
  );
};

export default Franchise2;
