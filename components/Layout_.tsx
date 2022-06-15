import Head from "next/head";
import React, { useEffect, useState } from "react";
interface Layout_Props {
  children: JSX.Element;
}

import {
  faAngleDoubleRight,
  faAngleRight,
  faBookmark,
  faCheckCircle,
  faEye,
  faSearch,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRecoilState } from "recoil";

export const Layout_ = ({ children }: Layout_Props) => {
  const [currentAccount, setCurrentAccount] = useState(false);
  return (
    <div
      className={`flex min-h-screen w-full flex-col items-center justify-center`}
    >
      <Head>
        <title>Buy Design</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`w-full h-[50px] fixed top-0`}>
        <div
          className={`transition-all duration-200 opacity-80 hover:opacity-100 flex flex-row relative right-3 w-[150px] h-full items-center justify-center m-2 ml-auto cursor-pointer`}
          onClick={() => {
            setCurrentAccount(true);
          }}
        >
          <div className={`w-[40px] h-full transition-all duration-500`}>
            <img
              src={`/assets/images/MetaMask.svg`}
              className={`h-full object-cover mr-auto relative left-[20px]`}
            />

            <FontAwesomeIcon
              icon={faCheckCircle}
              className={`absolute top-[1px] right-[-8px] m-2 h-[14px] w-[14px] text-blue-500 transition-all duration-[2000ms]`}
            />
          </div>
          <div
            className={`flex flex-col w-[100px] pl-6 pb-0 relative overflow-hidden transition-all duration-500`}
          >
            <p className={`font-thin relative top-[1px] text-black/50 text-[14px]`}>
              {currentAccount ? "MetaMask" : "Connect"}
            </p>
            <p className={`font-bold relative bottom-1 text-black/50 text-[14px]`}>
              {currentAccount ? "Connected" : "MetaMask"}
            </p>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};
