import { fetchActivities } from "@/services";
import React from "react";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { HighlightCard } from "@/components/HighlightCard";

interface IHighlightProps {
  hightlightActivties: any;
}

const Highlight = ({ hightlightActivties }: IHighlightProps) => {
  const router = useRouter();
  return (
    <div>
      <HighlightCard hightlightActivties={hightlightActivties} />
    </div>
  );
};

export default Highlight;

export const getServerSideProps: GetServerSideProps<IHighlightProps> = async (
  context
) => {
  try {
    const { slug } = context.query;
    const hightlightActivties = await fetchActivities(slug);
    console.log("hightlightActivties", hightlightActivties);

    return {
      props: {
        hightlightActivties,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        hightlightActivties: [],
        error: "Failed to fetch data",
      },
    };
  }
};
