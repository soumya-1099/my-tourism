import Box from "@mui/material/Box";
import React from "react";
import { Categories } from "./Categories";
import { TravelGuide } from "./TravelGuide";
import styleSectionWrapper from "../styles/SectionWrapper.module.css";

interface ISectionWrapperProps {
  categoriesData: any;
}

export const SectionWrapper = ({ categoriesData }: ISectionWrapperProps) => {
  return (
    <div className={styleSectionWrapper.sectionWrapperContainer}>
      <Categories categoriesData={categoriesData} />
      <TravelGuide />
    </div>
  );
};
