// 👇️

import { useState } from "react";
import { useRecoilState } from "recoil";
import {
  articleState,
  colorState,
  sizeState,
  accentState,
  addressState,
  baseState,
  countryState,
  emailState,
  walletState,
  notificationState,
} from "../components/atoms/atoms";

import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CenterStage_Props {}

const CenterStage_ = ({}: CenterStage_Props) => {
  const [colors_, setColors_] = useRecoilState(colorState);
  const [accent_, setAccent_] = useRecoilState(accentState);
  const [base_, setBase_] = useRecoilState(baseState);
  const [country_, setCountry_] = useRecoilState(countryState);
  const [email_, setEmail_] = useRecoilState(emailState);
  const [article_, setArticle_] = useRecoilState(articleState);
  const [size_, setSize_] = useRecoilState(sizeState);
  const [notification_, setNotification_] = useRecoilState(notificationState);

  return (
    <div
      className={`rounded-[4px] shadow-md bg-white w-[830px] h-[500px] absolute top-[70px] left-0 overflow-hidden`}
    >
      <div
        className={`flex h-[200px] w-[400px] rotate-3 self-center absolute top-[50px] opacity-60`}
      >
        <img
          className="relative left-[-150px] top-[-50px] hidden h-[280px] rotate-[-100deg] opacity-40 transition-all duration-200 md:flex"
          src="/assets/images/LwaziNF.png"
        />
        <img
          className="relative right-[150px] top-[180px] hidden h-[200px] -rotate-45 opacity-20 transition-all duration-200 md:flex"
          src="/assets/images/LwaziNF.png"
        />
        <img
          className="relative right-[60px] top-[-20px] hidden h-[100px] rotate-[-5deg] opacity-10 transition-all duration-200 md:flex"
          src="/assets/images/LwaziNF.png"
        />
        <img
          className="relative right-[80px] top-[0px] hidden h-[400px] rotate-[30deg] opacity-30 transition-all duration-200 md:flex"
          src="/assets/images/LwaziNF.png"
        />
        <img
          className="relative left-[-640px] top-[-120px] hidden h-[180px] rotate-[-200deg] opacity-60 transition-all duration-200 md:flex"
          src="/assets/images/LwaziNF.png"
        />
      </div>
      <div
        className={`w-full h-[35px] ${
          notification_ ? "bg-green-300" : "bg-transparent"
        } transition-all duration-500 flex flex-row`}
      >
        <div className={`text-[15px] ${
          notification_ ? "opacity-70" : "opacity-0"} transition-all duration-500 font-medium mb-1 w-full my-1 pl-[50px] text-center justify-center items-center`}>
          Thank you for supporting our service.
        </div>
        <FontAwesomeIcon
          icon={faXmarkCircle}
          className={`m-2 h-[18px] w-[18px] ${
            notification_ ? 'text-black/80 cursor-pointer' : 'text-black/0'} ml-auto mr-3 mt-2 transition-all duration-500 absolute top-0 right-0`}
          onClick={() => {
            setNotification_(false)
          }}
        />
      </div>
      <div
        className={`w-full h-[400px] flex flex-row items-center justify-center relative mb-4 mt-4`}
      >
        <img
          src={`/assets/images/${article_}.png`}
          className={`${
            article_ == "hoodie" ? "h-full" : "h-[50%]"
          } object-cover ${
            article_ == "hoodie" ? "ml-[100px]" : "ml-[80px] mr-[20px]"
          }`}
          // @ts-ignore
          style={{ filter: colors_[base_] }}
        />
        <img
          src={`/assets/images/${article_}.png`}
          className={`${
            article_ == "hoodie" ? "h-full" : "h-[50%]"
          } object-cover absolute ${
            article_ == "hoodie" ? "left-[100px]" : "left-[80px]"
          }`}
          style={{ mixBlendMode: "multiply" }}
        />
        <div
          className={`absolute ${
            article_ == "hoodie"
              ? "h-[130px] top-[90px] left-[175px]"
              : "h-[100px] top-[110px] left-[155px] rotateY"
          } w-[150px] mt-1 opacity-100 flex items-center justify-center`}
        >
          <img
            src={`/assets/images/LwaziNF.png`}
            className={`h-full object-cover`}
            // @ts-ignore
            style={{ filter: colors_[accent_] }}
          />
        </div>
        <div
          className={`w-[350px] h-[400px] ml-auto mr-[30px] bg-gray-50/90 border-solid border-gray-300 border-[0.5px] rounded-[4px] mb-1 p-1 flex flex-col items-center justify-center`}
        >
          <div
            className={`w-full h-[133px] flex flex-row items-center justify-center py-4`}
          >
            <div
              className={`h-full p-4 ${
                article_ == "hoodie" ? "bg-blue-500/90" : "bg-blue-500/50"
              } border-solid border-gray-200 border-[1px] flex items-center justify-center rounded-[4px] mx-1 cursor-pointer hover:opacity-100 opacity-70 transition-all duration-200`}
              onClick={() => {
                setArticle_("hoodie");
                setAccent_("white");
                setBase_("white");
              }}
            >
              <img
                src={`/assets/images/hoodie.png`}
                className={`h-full object-cover`}
              />
            </div>
            {/* <div
              className={`h-full p-4 ${
                article_ == "shoe" ? "bg-blue-500/90" : "bg-blue-500/50"
              } border-solid border-gray-200 border-[1px] flex items-center justify-center rounded-[4px] mx-1 cursor-pointer hover:opacity-100 opacity-70 transition-all duration-200`}
              onClick={() => {
                setArticle_("shoe");
              }}
            >
              <img
                src={`/assets/images/shoe.png`}
                className={`h-full object-cover`}
              />
            </div> */}
            <div
              className={`h-full p-4 ${
                article_ == "cap" ? "bg-blue-500/90" : "bg-blue-500/50"
              } border-solid border-gray-200 border-[1px] flex items-center justify-center rounded-[4px] mx-1 cursor-pointer hover:opacity-100 opacity-70 transition-all duration-200`}
              onClick={() => {
                setArticle_("cap");
                setAccent_("white");
                setBase_("white");
              }}
            >
              <img
                src={`/assets/images/cap.png`}
                className={`h-full object-cover`}
              />
            </div>
          </div>
          <p className={`text-[15px] opacity-50 font-bold mb-1 w-full`}>
            Size:
          </p>
          <div className={`flex flex-row w-full h-[30px] mb-5`}>
            <div
              className={`transition-all duration-200 ${
                size_ == "small"
                  ? "w-[100px] bg-blue-500/90"
                  : "w-full bg-blue-500/50"
              } h-[40px] rounded-[2px] shadow-sm mx-1 mr-[1px] cursor-pointer opacity-80 hover:opacity-100 flex justify-center items-center text-[15px] text-white font-bold`}
              onClick={() => {
                setSize_("small");
              }}
            >
              SM
            </div>
            <div
              className={`transition-all duration-200 ${
                size_ == "medium"
                  ? "w-[100px] bg-blue-500/90"
                  : "w-full bg-blue-500/50"
              } h-[40px] rounded-[2px] shadow-sm mx-[1px] cursor-pointer opacity-80 hover:opacity-100 flex justify-center items-center text-[15px] text-white font-bold`}
              onClick={() => {
                setSize_("medium");
              }}
            >
              MD
            </div>
            <div
              className={`transition-all duration-200 ${
                size_ == "large"
                  ? "w-[100px] bg-blue-500/90"
                  : "w-full bg-blue-500/50"
              } h-[40px] rounded-[2px] shadow-sm mx-1 ml-[1px] cursor-pointer opacity-80 hover:opacity-100 flex justify-center items-center text-[15px] text-white font-bold`}
              onClick={() => {
                setSize_("large");
              }}
            >
              LG
            </div>
          </div>
          <p className={`text-[15px] opacity-50 font-bold mb-1 w-full`}>
            Base Color:
          </p>
          <div className={`flex flex-row w-full h-[30px] mb-2`}>
            <div
              className={`transition-all duration-200 ${
                base_ == "black" ? "w-[100px]" : "w-full"
              } h-[25px] rounded-[2px] shadow-sm bg-black mx-[1px] ml-1 cursor-pointer opacity-80 hover:opacity-100`}
              onClick={() => {
                setBase_("black");
              }}
            />
            <div
              className={`transition-all duration-200 ${
                base_ == "white" ? "w-[100px]" : "w-full"
              } h-[25px] rounded-[2px] shadow-sm bg-white mx-[1px] cursor-pointer opacity-80 hover:opacity-100`}
              onClick={() => {
                setBase_("white");
              }}
            />
            <div
              className={`transition-all duration-200 ${
                base_ == "green" ? "w-[100px]" : "w-full"
              } h-[25px] rounded-[2px] shadow-sm bg-green-500 mx-[1px] cursor-pointer opacity-80 hover:opacity-100`}
              onClick={() => {
                setBase_("green");
              }}
            />
            <div
              className={`transition-all duration-200 ${
                base_ == "pink" ? "w-[100px]" : "w-full"
              } h-[25px] rounded-[2px] shadow-sm bg-pink-600 mx-[1px] cursor-pointer opacity-80 hover:opacity-100`}
              onClick={() => {
                setBase_("pink");
              }}
            />
            <div
              className={`transition-all duration-200 ${
                base_ == "brown" ? "w-[100px]" : "w-full"
              } h-[25px] rounded-[2px] shadow-sm bg-lime-400 mx-[1px] cursor-pointer opacity-80 hover:opacity-100`}
              onClick={() => {
                setBase_("brown");
              }}
            />
            <div
              className={`transition-all duration-200 ${
                base_ == "blue" ? "w-[100px]" : "w-full"
              } h-[25px] rounded-[2px] shadow-sm bg-purple-400 mx-[1px] mr-1 cursor-pointer opacity-80 hover:opacity-100`}
              onClick={() => {
                setBase_("blue");
              }}
            />
          </div>
          <p className={`text-[15px] opacity-50 font-bold mb-1 w-full`}>
            Accent Color:
          </p>
          <div className={`flex flex-row w-full h-[30px]`}>
            <div
              className={`transition-all duration-200 ${
                accent_ == "white" ? "w-[100px]" : "w-full"
              } h-[25px] rounded-[2px] shadow-sm bg-black mx-[1px] ml-1 cursor-pointer opacity-80 hover:opacity-100`}
              onClick={() => {
                setAccent_("white");
              }}
            />
            <div
              className={`transition-all duration-200 ${
                accent_ == "black" ? "w-[100px]" : "w-full"
              } h-[25px] rounded-[2px] shadow-sm bg-white mx-[1px] cursor-pointer opacity-80 hover:opacity-100`}
              onClick={() => {
                setAccent_("black");
              }}
            />
            <div
              className={`transition-all duration-200 ${
                accent_ == "green" ? "w-[100px]" : "w-full"
              } h-[25px] rounded-[2px] shadow-sm bg-green-800 mx-[1px] cursor-pointer opacity-80 hover:opacity-100`}
              onClick={() => {
                setAccent_("green");
              }}
            />
            <div
              className={`transition-all duration-200 ${
                accent_ == "pink" ? "w-[100px]" : "w-full"
              } h-[25px] rounded-[2px] shadow-sm bg-pink-600 mx-[1px] cursor-pointer opacity-80 hover:opacity-100`}
              onClick={() => {
                setAccent_("pink");
              }}
            />
            <div
              className={`transition-all duration-200 ${
                accent_ == "lightblue" ? "w-[100px]" : "w-full"
              } h-[25px] rounded-[2px] shadow-sm bg-blue-300 mx-[1px] cursor-pointer opacity-80 hover:opacity-100`}
              onClick={() => {
                setAccent_("lightblue");
              }}
            />
            <div
              className={`transition-all duration-200 ${
                accent_ == "blue" ? "w-[100px]" : "w-full"
              } h-[25px] rounded-[2px] shadow-sm bg-blue-600 mx-[1px] mr-1 cursor-pointer opacity-80 hover:opacity-100`}
              onClick={() => {
                setAccent_("blue");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterStage_;
