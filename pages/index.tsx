import Head from "next/head";
import Highlight from "@/components/Hightlight";
import { fetchCategories, fetchHighlights } from "@/services";
import { SectionWrapper } from "@/components/SectionWrapper";

export default function Home(props: any) {

  return (
    <>
      <Head>
        <title>Hawaii Tourism</title>
        <meta name="description" content="Hawaii Tourism" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Highlight hightlights={props?.hightlights} />
      <SectionWrapper categoriesData={props?.categoriesData}/>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const hightlights = await fetchHighlights();
    const categoriesData = await fetchCategories();

    return {
      props: {
        hightlights,
        categoriesData,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        hightlights: [], 
        categoriesData: [], 
        error: "Failed to fetch data",
      },
    };
  }
}

