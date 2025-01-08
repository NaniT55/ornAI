import React from "react";
import { GoGoal } from "react-icons/go";
import { LuTarget } from "react-icons/lu";

const AboutPage = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-1">
          <img src="./images/about-1.jpg" alt="About-page" />
        </div>
        <div className="content">
          <h2>Welcome to ORN-AI E-learning</h2>
          <p>
            ORN-AI champions the transformative power of education as a boutique
            training platform, providing tailored, high-quality career
            development solutions. Specializing in cross-technology training,
            personalized CV writing, interview preparation, and placement
            services, we offer a hands-on learning experience that addresses the
            unique needs of each candidate. Focused on underserved regions,
            expats, and niche markets, ORN-AI combines expert-led sessions with
            AI-powered content, delivering holistic, career-focused training
            that ensures long-term success in today’s competitive job market.
            From Cyber Security to Business Management, our courses are crafted
            to build expertise and confidence.
          </p>
        </div>
      </div>
      <section className="about-section2">
        <div>
          <LuTarget className="icon" />
          <h2>Our Vision</h2>
          <p>
            We empower individuals worldwide by delivering top-quality,
            career-oriented education with guaranteed job placements, fostering
            equal opportunities and shaping the future of work through
            innovative training and ethical career-building.
          </p>
        </div>
        <div>
          <GoGoal className="icon" />
          <h2>Our Mission</h2>
          <p>
            We unlock potential globally by offering high-quality, accessible,
            and innovative education. Whether you're kickstarting a new career,
            upgrading your skills, or seeking enrichment, ORN-AI is your
            learning partner at the cutting edge of industry developments.
          </p>
        </div>
      </section>
      <section className="about-container">
        <div className="content">
          <h1>The Challenge</h1>
          <p>
            Many graduates, particularly from underserved communities, face
            significant barriers transitioning from academia to employment.
            These include:
          </p>
          <ul>
            <li>- False promises and high fees from unethical recruiters</li>
            <li>- Short-term jobs without security or formal contracts</li>
            <li>
              - Insufficient training, leaving them unprepared for their roles
            </li>
            <li>- Lack of support post-placement</li>
            <li>- Exploitation by fraudulent job channels</li>
            <li>- Potential career damage from backdoor hiring practices</li>
          </ul>
        </div>
        <div className="about-1">
          <img src="./images/about-2.jpg" alt="about-2" />
        </div>
      </section>
      <section>
        <div className="section-3">
          <h2>Global Expansion</h2>
          <p>
            We’re broadening our reach into key European markets to provide
            expats and international job seekers with tailored career support,
            including CV writing, interview prep, skill upgrades, and networking
            opportunities, tailored to the European job market's demands.
          </p>
          <img src="./images/about-3.png" alt="about-3" height={50} />
        </div>
      </section>
    </>
  );
};

export default AboutPage;
