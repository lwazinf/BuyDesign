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
  const [address_, setAddress_] = useRecoilState(addressState);
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

      /*
       * Check if we're authorized to access the user's wallet
       */
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

  // const makePayment = async () => {
  //   try {
  //     const { ethereum } = window;

  //     if (ethereum) {
  //       const contractAddress = "0x042249c18b70138A0e7341Ae02728628665bb0Ac";
  //       const contractABI = abi.abi;

  //       const provider = new ethers.providers.Web3Provider(ethereum);
  //       const signer = provider.getSigner();
  //       const buyDesign = new ethers.Contract(
  //         contractAddress,
  //         contractABI,
  //         signer
  //       );

  //       let data_ = await buyDesign.viewOrder();
  //       console.log(data_);
  //     } else {
  //       console.log("Ethereum object doesn't exist!");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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
      {children}
    </div>
  );
};
