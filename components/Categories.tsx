import Box from "@mui/material/Box";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import styleCategories from "../styles/Categories.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

interface ICategoriesProps {
  categoriesData: any;
}

export const Categories = ({ categoriesData }: ICategoriesProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);

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
                  onClick={() => {
                    setSelectedCategory(cval.name);
                    setOpenModal(true);
                  }}
                >
                  <ArrowForwardIcon style={{ color: "#008080" }} />
                </button>
              </div>
            ))}
        </Stack>

        <Dialog open={openModal} onClose={() => setOpenModal(false)}>
          <DialogTitle
            sx={{
              fontSize: 18,
              fontStyle: "normal",
              fontWeight: 700,
              color: "#008080",
            }}
          >
            {selectedCategory} Activities
          </DialogTitle>
          <DialogContent>
            {categoriesData
              .find((category: any) => category.name === selectedCategory)
              ?.activities.map((activity: any, id: number) => (
                <p key={id} className={styleCategories.categoriesActivitiesTitle}>&#x261B; {activity.title}</p>
              ))}
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenModal(false)}>Close</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </div>
  );
};
