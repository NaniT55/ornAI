import React from "react";
import {
  FaMapMarkedAlt,
  FaGraduationCap,
  FaLaptopCode,
  FaHandsHelping,
} from "react-icons/fa";

export const franchiseBenefits = [
  {
    id: "1",
    title: "Exclusive Territory Rights",
    description:
      "Be the sole ORN-AI franchise in your region, capturing local markets with cutting-edge training and placement services.",
    icon: <FaMapMarkedAlt size={40} color="#4CAF50" />,
  },
  {
    id: "2",
    title: "Proven Training Methodology",
    description:
      "Implement tried-and-tested training programs, leveraging 10+ years of Aguila Consulting expertise.",
    icon: <FaGraduationCap size={40} color="#FF9800" />,
  },
  {
    id: "3",
    title: "High-Demand Skill Courses",
    description:
      "Offer in-demand courses tailored to current market trends, ensuring career success for learners.",
    icon: <FaLaptopCode size={40} color="#2196F3" />,
  },
  {
    id: "4",
    title: "Comprehensive Support",
    description:
      "Get unparalleled support from ORN-AI, including marketing, tech, and placement assistance.",
    icon: <FaHandsHelping size={40} color="#9C27B0" />,
  },
];
