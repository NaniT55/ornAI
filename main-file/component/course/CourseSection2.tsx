import { CourseType } from "@/types";
import Link from "next/link";
import React from "react";
import RatingStars from "../rating/rating";

interface Props {
  courseData: CourseType[];
}

const CourseSection2: React.FC<Props> = ({ courseData }) => {
  return (
    <section className="tf__courses_2 tf__courses_3">
      <div className="container">
        <div className="row wow fadeInUp">
          <div className="col-xl-7 col-xxl-6 col-md-8 col-lg-6 m-auto">
            <div className="tf__heading_area mb_20">
              <h5>OUR POPULAR COURSES</h5>
              <h2>Educational For Students Popular Courses.</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {courseData?.slice(0, 6).map((item, index) => (
            <div className="col-xl-4 col-md-6 wow fadeInUp" key={index} >
              <div className="tf__single_courses">
                {/* Course Image */}
                <div className="tf__single_courses_img" >
                  <img
                    src={item.imgSrc.image}
                    alt={item.imgSrc.alt || item.title}
                    className="img-fluid w-100"
                  />
                  <a className={`categories ${item.color}`} href="#">
                    {item.category}
                  </a>
                </div>

                {/* Course Header (Optional Fields) */}
                <ul className="tf__single_course_header">
                  {item.instructor && (
                    <li>
                      {/* <i className="fas fa-user"></i> {item.instructor} */}
                    </li>
                  )}
                  {item.lessons > 0 && (
                    <li>
                      <i className="fas fa-folder-open"></i> {item.lessons} lessons
                    </li>
                  )}
                </ul>

                {/* Course Details */}
                <div className="tf__single_courses_text">
                  <Link className="title" href={`/courses/${item.slug}`}>
                    {item.title}
                  </Link>
                  <p className="description">{item.description}</p>
                  <ul>
                    <RatingStars rating={item.rating} />
                    {item.students > 0 && (
                      <li></li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseSection2;
