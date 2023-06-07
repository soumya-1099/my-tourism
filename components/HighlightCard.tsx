import { CardMedia } from "@mui/material";
import Image from "next/image";
import React from "react";
import styleHightLightCard from "../styles/HighlightCard.module.css";

interface IHighlightCardProps {
  hightlightActivties: any;
}

export const HighlightCard = ({ hightlightActivties }: IHighlightCardProps) => {

  return (
    <>
      <div className={styleHightLightCard.wrapper}>
        <Image
          src={hightlightActivties?.image ?? ""}
          alt="highlight activities"
          layout="responsive"
          width={300}
          height={300}
          className={styleHightLightCard.image}
        />
        <div className={styleHightLightCard.textBox}>
          <h2>{hightlightActivties?.name ?? ""}</h2>
          <p>{hightlightActivties?.description ?? ""}</p>
          <h4>
            Activities available under {hightlightActivties?.name ?? ""}:{" "}
          </h4>
          {hightlightActivties?.activities?.map((cval: any, id: number) => {
            return (
              <div key={id} style={{ display: "flex", flexWrap: "wrap" }}>
                <p>{cval?.name ?? ""}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
