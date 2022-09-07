import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import MainNavbar from "../components/MainNavbar";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Centralized Catalog</title>
        <meta name="description" content="Centralized Catalog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainNavbar />
    </div>
  );
};

export default Home;
