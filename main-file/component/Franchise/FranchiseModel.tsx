import React from "react";


const franchiseModel = {
  heading: "Our Franchise Model",
  points: [
    {
      title: "Exclusive Territory Rights",
      description:
        "Be the sole ORN-AI franchise in your region, capturing local markets with cutting-edge training and placement services.",
    },
    {
      title: "Proven Training Methodology",
      description:
        "Implement tried-and-tested training programs, leveraging 10+ years of Aguila Consulting expertise.",
    },
    {
      title: "High-Demand Skill Courses",
      description:
        "Offer in-demand courses tailored to current market trends, ensuring career success for learners.",
    },
    {
      title: "Comprehensive Support",
      description:
        "Get unparalleled support from ORN-AI, including marketing, tech, and placement assistance.",
    },
  ],
};

const FranchiseModel: React.FC = () => {
  return (
    <section className="franchise-model">
      <h1 className="heading">{franchiseModel.heading}</h1>
      <hr /><br />
      <ul className="points-list">
        {franchiseModel.points.map((point, index) => (
          <li key={index} className="list-item">
            <span className="tick-mark">✔</span>
            <div className="list-content">
              <h2 className="title">{point.title}</h2>
              <p className="description">{point.description}</p>
              <br />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FranchiseModel;
