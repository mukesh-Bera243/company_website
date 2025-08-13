import React from "react";
import { FaDollarSign, FaGraduationCap, FaShieldAlt, FaIndustry, FaShoppingCart, FaSignal, FaLaptop, FaFlask, FaHandsHelping, FaChartLine, FaArrowRight } from "react-icons/fa";

const industries = [
  { name: "Banking", icon: <FaDollarSign /> },
  { name: "Capital Markets", icon: <FaChartLine /> },
  { name: "Communications, Media, and Information Services", icon: <FaSignal /> },
  { name: "Consumer Packaged Goods and Distribution", icon: <FaShoppingCart /> },
  { name: "Education", icon: <FaGraduationCap /> },
  { name: "Energy, Resources, and Utilities", icon: <FaSignal /> },
  { name: "Healthcare", icon: <FaShieldAlt /> },
  { name: "High Tech", icon: <FaLaptop /> },
  { name: "Insurance", icon: <FaDollarSign /> },
  { name: "Life Sciences", icon: <FaFlask /> },
  { name: "Manufacturing", icon: <FaIndustry /> },
  { name: "Public Services", icon: <FaHandsHelping /> },
];

export default function HomeIndustryList() {
  return (
    <div className="industryContainer">
      <h2 className="industryHeader">Select your industry. Discover our impact.</h2>
      <div className="industryGrid">
        {industries.map((industry, index) => (
          <div className="industryItem" key={index}>
            <div className="industryIcon">{industry.icon}</div>
            <div className="industryName">{industry.name}</div>
            <div className="arrowIcon"><FaArrowRight /></div>
          </div>
        ))}
      </div>
    </div>
  );
}
