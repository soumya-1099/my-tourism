import { hawaii } from "@/constants";

export const fetchHighlights = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${hawaii.endpoints.HIGHLIGHTS}`);
    if (!response.ok) {
      throw new Error("Failed to fetch highlights");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching highlights:", error);
    throw error;
  }
  }

  export const fetchCategories = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${hawaii.endpoints.CATEGORIES}`);
      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }
      const data = await response.json();
      return data;
    } catch (error) {

      console.error("Error fetching categories:", error);
      throw error;
    }
  };
  

  export const fetchActivities = async (type: any) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}v1/activities/${type}`);
      if (!response.ok) {
        throw new Error('Failed to fetch activities');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching activities:', error);
      throw error;
    }
  };
  
  