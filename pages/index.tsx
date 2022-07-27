import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/index.module.css";
import Mainbody from "../components/Mainbody";
import Navbar from "../components/Navbar";
import Sidebar from '../components/Sidebar'



const Home: any | NextPage = () => {
  

  return (
    <div className={styles.container}>
      <Head>
        <title>Adekunle Mohammed</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Mainbody />
      <Sidebar/>
    </div>
  );
};

export default Home;

