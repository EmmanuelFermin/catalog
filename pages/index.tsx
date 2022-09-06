import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Logo from "../assets/logo/Logo.png"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Centralized Catalog</title>
        <meta name="description" content="Centralized Catalog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid-element">
        <Image
          src={Logo}
          alt="Centralized Catalog Logo"
        />
      </div>
    </div>
  );
};

export default Home;
