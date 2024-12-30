import { ServiceType } from "@/types";
import {
  FcBullish,
  FcCustomerSupport,
  FcGlobe,
  FcCheckmark,
} from "react-icons/fc";

export const servicesData: ServiceType[] = [
  {
    _id: "1",
    iClassName: "fas fa-chart-line", // Optional, not needed if using the `icon` field
    title: "Proven Track Record",
    desc: "Leverage 10+ years of Aguila Consulting's recruitment expertise, with thousands of candidates successfully placed globally across diverse industries.",
    color: "green",
    icon: <FcBullish size={40} />,
  },
  {
    _id: "2",
    iClassName: "fas fa-robot", // Optional
    title: "Comprehensive Career Solutions",
    desc: "Offer over 100 industry-aligned courses across high-demand fields, complete with grooming, real-time project training, and expert-led interview preparation until placement.",
    color: "orange",
    icon: <FcCustomerSupport size={40} />,
  },
  {
    _id: "3",
    iClassName: "fas fa-cloud", // Optional
    title: "Global Reach, Local Impact",
    desc: "Tap into Aguila Consulting's international network to place candidates worldwide, fulfilling ORN-AI's promise of 'Train Locally, Excel Globally.'",
    color: "blue",
    icon: <FcGlobe size={40} />,
  },
  {
    _id: "4",
    iClassName: "fas fa-database", // Optional
    title: "Guaranteed Success",
    desc: "Provide subscribers with assured placements, setting your franchise apart in a competitive market.",
    color: "red",
    icon: <FcCheckmark size={40} />,
  },
];
