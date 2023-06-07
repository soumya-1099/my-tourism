import Box from "@mui/material/Box";
import { Stack } from "@mui/system";
import React from "react";
import styleCategories from "../styles/Categories.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRouter } from "next/router";

interface ICategoriesProps {
  categoriesData: any;
}

export const Categories = ({ categoriesData }: ICategoriesProps) => {
  const router = useRouter();

  const handleClick = (name: string) => {
    console.log("click", name);
    router.push(`/activities/${name}`);
  };

  return (
    <div className={styleCategories.categoriesContainer}>
      <h2 className={styleCategories.categoriesTitle}>Categories</h2>

      <Box sx={{ width: "100%" }}>
        <Stack spacing={2}>
          {categoriesData?.length > 1 &&
            categoriesData.map((cval: any, id: number) => (
              <div key={id} className={styleCategories.categoriesCard}>
                <span>{cval.name}</span>
                <button
                  className={styleCategories.categoriesCardButton}
                  onClick={() => handleClick(cval?.name)}
                >
                  <ArrowForwardIcon style={{ color: "#008080" }} />
                </button>
              </div>
            ))}
        </Stack>
      </Box>
    </div>
  );
};
