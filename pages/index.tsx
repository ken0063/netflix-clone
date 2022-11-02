import Head from "next/head";

import Header from "../components/Header";

const Home = () => {
  return (
    <div
      className={`relative h-screen bg-gradient-to-b lg:h-[140vh]"
      }`}
    >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  );
};

export default Home;
