import Navbar from '@/components/Navbar'
import Head from 'next/head'
import Footer from '@/components/Footer'
import Banner from "@/components/Banner";
import Highlight from '@/components/Hightlight';

export default function Home() {
  return (
    <>
      <Head>
        <title>Hawaii Tourism</title>
        <meta name="description" content="Hawaii Tourism" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Banner/>
      <Highlight/>
      <Footer/>
    </>
  )
}
