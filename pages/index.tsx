import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);

  return (
    <div>
      <Head>
        <title>Centralized Catalog</title>
        <meta name="description" content="Centralized Catalog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isAuthenticated ? <div>Content</div> : ""}
    </div>
  );
};

export default Home;
