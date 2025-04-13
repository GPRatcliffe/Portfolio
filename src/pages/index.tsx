import Head from "next/head";
import Experience from "@/components/Experience/Experience";

const Home = () => {
  return (
    <>
      <Head>
        <title>Portfolio site of Gary Ratcliffe</title>
        <meta
          name="description"
          content="Gary Ratcliffe, Front End Software Engineer with over 12 years experience in the industry"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Experience />
      </main>
    </>
  );
};

export default Home;
