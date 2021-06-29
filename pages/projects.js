import Head from "next/head";
import Header from "../components/projects/Header.js";

export default function Home() {
  return (
    <>
      <Head>
        <title>Stupid Hackathon 5</title>
      </Head>
      <main
        className="wrapper wrapper__space"
      >
        <Header />
      
      </main>
    </>
  );
}
