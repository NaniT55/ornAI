"use client";
import { toggleVideoOpen } from "@/redux/features/videoSlice";
import { useAppDispatch } from "@/redux/hooks";
import Link from "next/link";
import React from "react";
type Props = {
  style: string;
  logo: string;
}
const FooterSection2 = ({ style, logo } : Props) => {
  const dispatch = useAppDispatch()
  const handleVideoShow = () => {
    dispatch(toggleVideoOpen())
  }  
  return (
    <footer className={style}>
      <div className="container">
        <div className="tf__footer_apply">
          <div className="tf__footer_apply_overlay">
            <a className="venobox" role="button" onClick={handleVideoShow}>
              <i className="fas fa-play"></i>
            </a>
            <h3>Let’s See More About ORN - AI</h3>
            <p>
            Train Locally, Excel Globally
            </p>
            <Link className="apply_btn" href="/">
              Know more
            </Link>
          </div>
        </div>
      </div>

      <div className="tf__footer">
        <div className="tf__footer_overlay pt_225">
          <div className="container">
            <div className="tf__footer_2_content_area">
              <div className="row justify-content-between g-4">
                <div className="col-xl-3 col-md-7 col-lg-3">
                  <div className="tf__footer_logo_area">
                    <Link className="footer_logo" href="/">
                      <img src='/images/orn-logo.png' alt="Eduor" className="img-fluid w-100" />
                    </Link>
                    <p>
                      Nemo enim ipsam voluptate quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia magni this dolores eos qui
                      ratione .
                    </p>
                    <ul className="d-flex flex-wrap">
                      <li>
                        <Link href="#">
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-linkedin-in"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-pinterest-p"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-google-plus-g"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-2 col-md-5 col-lg-3">
                  <div className="tf__footer_content">
                    <h3>Quick Links</h3>
                    <ul>
                      <li>
                        <Link href="/courses">About us</Link>
                      </li>
                      <li>
                        <Link href="/events">Courses</Link>
                      </li>
                      <li>
                        <Link href="/about">Grooming plans</Link>
                      </li>
                      <li>
                        <Link href="/contact">Franchise</Link>
                      </li>
                      <li>
                        <Link href="/contact">Contact us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-md-7 col-lg-3">
                  <div className="tf__footer_content">
                    <h3>Contact us</h3>
                    <p>Adress: Hitech city, Hyderabad </p>
                    <p>
                      <span> Phone: <Link href='tel: +8 1440 456 782'>+8 1440 456 782</Link></span>
                      <span>Fax: <Link href='tel: +8 846512 456 788'>+8 846512 456 788</Link></span>
                    </p>
                    <p>
                      <span>Email: <Link href='mailTo: example@mail.com'>example@mail.com</Link> </span>
                      <span>Website: <Link href='yourwebsite.com'>yourwebsite.com</Link></span>
                    </p>
                  </div>
                </div>
                <div className="col-xl-3 col-md-5 col-lg-3">
                  <div className="tf__footer_content">
                    <h3>News Letter</h3>
                    <p>
                      Subscribe to our news letter
                    </p>
                    <form>
                      <input type="text" placeholder="Your Email" />
                      <button>subscribe</button>
                    </form>
                  </div>
                </div>

                <div className="col-12">
                  <div className="tf__copyright">
                    <p>Copyright © ORN-AI all rights reserved.</p>
                    <ul className="d-flex flex-wrap">
                      <li>
                        <Link href="/privacy-policy">Privacy policy</Link>
                      </li>
                      <li>
                        <Link href="/about">About</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection2;
