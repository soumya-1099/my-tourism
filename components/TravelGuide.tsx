import { TravelGuideData } from "@/constants";
import Image from "next/image";
import React from "react";
import styleTravelGuide from "../styles/TravelGuide.module.css";

interface ITravelGuideProps {}

export const TravelGuide = ({}: ITravelGuideProps) => {
  return (
    <div className={styleTravelGuide.travelGuideContainer}>
      <h2 className={styleTravelGuide.travelGuideTitle}>Travel Guide</h2>
      {TravelGuideData?.map((cval, id) => {
        return (
          <div className={styleTravelGuide.travelGuideCard} key={id}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className={styleTravelGuide.travelDescriptionContent}>
                <h2 className={styleTravelGuide.travelGuideName}>
                  {cval?.name}
                </h2>
                <p className={styleTravelGuide.subtitle}>{cval?.content}</p>
              </div>
              <div>
                <button className={styleTravelGuide.travelButton}>
                  Contact
                </button>
              </div>
            </div>
            <div>
              <Image
                className={styleTravelGuide.profileImage}
                src={cval?.profile}
                alt="Profile Pic"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
