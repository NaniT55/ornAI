"use client";
import { FranchiseType } from "@/types";
import React from "react";
import Slider from "react-slick";

interface Props {
  FranchiseData: FranchiseType[];
}

const FranchiseSlider = ({ FranchiseData }: Props) => {
  return (
    <Slider
      className="row popular_service_slider wow fadeInUp"
      slidesToShow={3}
      infinite={true}
      dots={true}
      arrows={false}
      autoplay={true}
      slidesToScroll={1}
      responsive={[
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
          },
        },
        // {
        //   breakpoint: 1200,
        //   settings: {
        //     slidesToShow: 3,
        //   },
        // },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          },
        },
        // {
        //   breakpoint: 768,
        //   settings: {
        //     slidesToShow: 2,
        //   },
        // },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          },
        },
      ]}
    >
      {FranchiseData.map((item) => (
        <div className="col-xl-3" key={item._id}>
          <div className={`tf__activities_item  ${item.color}`}>
            {/* <span>
              <i className={item.iClassName}></i>
            </span> */}
            <h3>{item.title}</h3>
            <p>{item.desc}</p> {/* Display the description here */}
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default FranchiseSlider;
