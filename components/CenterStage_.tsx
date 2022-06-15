import { useState } from "react";
import { useRecoilState } from "recoil";
import { articleState, colorState, sizeState } from "../components/atoms/atoms";

interface CenterStage_Props {}

const CenterStage_ = ({}: CenterStage_Props) => {
  const [colors_, setColors_] = useRecoilState(colorState);
  const [article_, setArticle_] = useRecoilState(articleState);
  const [size_, setSize_] = useRecoilState(sizeState);
  const [base_, setBase_] = useState("white");
  const [accent_, setAccent_] = useState("white");
  return (
    <div
      className={`rounded-[4px] shadow-md bg-white w-[830px] h-[600px] absolute top-[70px] left-0 overflow-hidden`}
    >
      <div className={`w-full h-[35px] bg-green-300`} />
      <div
        className={`w-full h-[400px] flex flex-row items-center justify-center relative mb-4 mt-4`}
      >
        <img
          src={`/assets/images/hoodie.png`}
          className={`h-full object-cover ml-[100px]`}
          style={{ filter: colors_[base_] }}
        />
        <img
          src={`/assets/images/hoodie.png`}
          className={`h-full object-cover absolute left-[100px]`}
          style={{ mixBlendMode: "multiply" }}
        />
        <div
          className={`absolute h-[130px] w-[150px] mt-1 opacity-100 flex items-center justify-center left-[175px] top-[90px]`}
        >
          <img
            src={`/assets/images/LwaziNF.png`}
            className={`h-full object-cover`}
            style={{ filter: colors_[accent_] }}
          />
        </div>
        <div
          className={`w-[350px] h-[400px] ml-auto mr-[30px] bg-gray-50 border-solid border-gray-300 border-[0.5px] rounded-[4px] mb-1 p-1 flex flex-col items-center justify-center`}
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
            <div
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
            </div>
            <div
              className={`h-full p-4 ${
                article_ == "cap" ? "bg-blue-500/90" : "bg-blue-500/50"
              } border-solid border-gray-200 border-[1px] flex items-center justify-center rounded-[4px] mx-1 cursor-pointer hover:opacity-100 opacity-70 transition-all duration-200`}
              onClick={() => {
                setArticle_("cap");
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
