import Head from "next/head";
import React, { useEffect, useState } from "react";
interface Layout_Props {
  children: JSX.Element;
}
import { ethers } from "ethers";
import abi from "../src/utils/BuyDesign.json";

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
import { addressState } from "./atoms/atoms";

export const Layout_ = ({ children }: Layout_Props) => {
  // 👇️👇️👇️ (string) Recoil addressState is used when a purchase is made..
  const [address_, setAddress_] = useRecoilState(addressState);

  // 👇️👇️👇️ Check if wallet is connected or not!
  const [currentAccount_, setCurrentAccount_] = useState("");

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
      } else {
        console.log("We have the ethereum object", ethereum);
      }

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        setCurrentAccount_(account);
        setAddress_(account);
      } else {
        console.log("No authorized account found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // 👇️👇️👇️ Self explanitory, connects the wallet to our web app
  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log("Connected", accounts[0]);
      setCurrentAccount_(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  // 👇️👇️👇️ useEffect, React.. automatically runs our wallet checker
  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);
  return (
    <div
      className={`flex min-h-screen w-full flex-col items-center justify-center`}
    >
      <Head>
        <title>Buy Design</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`w-full h-[50px] fixed top-0`}>
  {/* 👇️👇️👇️ MetaMask button.. */} 
        <div
          className={`transition-all duration-200 opacity-80 hover:opacity-100 flex flex-row relative right-3 w-[150px] h-full items-center justify-center m-2 ml-auto cursor-pointer`}
          onClick={() => {
            connectWallet();
          }}
        >
          <div className={`w-[40px] h-full transition-all duration-500`}>
            <img
              src={`/assets/images/MetaMask.svg`}
              className={`h-full object-cover mr-auto relative left-[20px]`}
            />

  {/* 👇️👇️👇️ MetaMask connection indicator.. */} 
            <FontAwesomeIcon
              icon={faCheckCircle}
              className={`absolute top-[1px] right-[-8px] m-2 h-[14px] w-[14px] ${
                currentAccount_.length != 0 ? "opacity-100" : "opacity-0"
              } text-blue-500 transition-all duration-[2000ms]`}
            />
          </div>
          <div
            className={`flex flex-col w-[100px] pl-6 pb-0 relative overflow-hidden transition-all duration-500`}
          >
  {/* 👇️👇️👇️ MetaMask Text.. */} 
            <p
              className={`font-thin relative top-[1px] text-black/50 text-[14px]`}
            >
              {currentAccount_.length != 0 ? "MetaMask" : "Connect"}
            </p>
            <p
              className={`font-bold relative bottom-1 text-black/50 text-[14px]`}
            >
              {currentAccount_.length != 0 ? "Connected" : "MetaMask"}
            </p>
          </div>
        </div>
      </div>
  {/* 👇️👇️👇️ Everything falls under this, as this is the layout file.. */} 
  {children}
    </div>
  );
};
