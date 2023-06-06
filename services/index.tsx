import { hawaii } from "@/constants";

export const fetchHighlights = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${hawaii.endpoints.HIGHLIGHTS}`);
    const data = await response.json();
    return data;
  }

  export const fetchCategories = async ()=>{
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${hawaii.endpoints.CATEGORIES}`)
    const data = response.json();
    return data
  }

  export const fetchActivities = async (type: any)=>{
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}v1/activities/${type}`)
    const data = response.json();
    return data
  }

  