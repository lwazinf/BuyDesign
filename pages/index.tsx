import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import CenterStage_ from "../components/CenterStage_";
import Payments_ from "../components/Payments_";

const Home: NextPage = () => {
  return (
    <div className="flex flex-row items-center justify-center w-[1200px] min-h-screen relative">
      <CenterStage_/>
      <Payments_/>
    </div>
  );
};

export default Home;
