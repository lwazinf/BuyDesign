import { ethers } from "ethers";
import abi from "../src/utils/BuyDesign.json";
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

import { faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Payments_Props {}

const Payments_ = ({}: Payments_Props) => {
  const [accent_, setAccent_] = useRecoilState(accentState);
  const [base_, setBase_] = useRecoilState(baseState);
  const [address_, setAddress_] = useRecoilState(addressState);
  const [country_, setCountry_] = useRecoilState(countryState);
  const [email_, setEmail_] = useRecoilState(emailState);
  const [article_, setArticle_] = useRecoilState(articleState);
  const [size_, setSize_] = useRecoilState(sizeState);
  const [notification_, setNotification_] = useRecoilState(notificationState);

  const makePayment = async (orderDetails_: string) => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const contractAddress = "0x5aB43EC3E812C62eb842d81f81C79F6fb445c950";
        const contractABI = abi.abi;

        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const buyDesign = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        await buyDesign.initOrder(orderDetails_);
        let data_ = await buyDesign.viewOrder();
        console.log(data_);
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className={`w-[350px] h-[400px] absolute top-[70px] right-0`}
    >
      <div
        className={`rounded-[4px] shadow-md bg-white/90 w-[350px] h-[400px] overflow-hidden`}
      >
        <div
          className={`w-[350px] h-[320px] p-2 items-center justify-start flex flex-col`}
        >
          <p className={`text-[15px] opacity-50 font-bold mb-1 w-full`}>
            Design Specs
          </p>
          <div
            className={`w-[330px] h-[115px] bg-gray-50 border-solid border-gray-300 border-[0.5px] rounded-[4px] mb-1 p-2`}
          >
            <div className={`flex flex-row`}>
              <p className={`text-[14px] opacity-40 font-light mb-1 w-full`}>
                Article Type:
              </p>
              <p
                className={`text-[14px] opacity-40 font-light mb-1 w-full ml-auto capitalize`}
              >
                {article_}
              </p>
            </div>
            <div className={`flex flex-row`}>
              <p className={`text-[14px] opacity-40 font-light mb-1 w-full`}>
                Preferred Size:
              </p>
              <p
                className={`text-[14px] opacity-40 font-light mb-1 w-full ml-auto capitalize`}
              >
                {size_}
              </p>
            </div>
            <div className={`flex flex-row`}>
              <p className={`text-[14px] opacity-40 font-light mb-1 w-full`}>
                Base Colour:
              </p>
              <p
                className={`text-[14px] opacity-40 font-light mb-1 w-full ml-auto capitalize`}
              >
                {base_ == "brown"
                  ? "lime"
                  : base_ == "blue"
                  ? "light purple"
                  : base_}
              </p>
            </div>
            <div className={`flex flex-row`}>
              <p className={`text-[14px] opacity-40 font-light mb-1 w-full`}>
                Accent Colour:
              </p>
              <p
                className={`text-[14px] opacity-40 font-light mb-1 w-full ml-auto capitalize`}
              >
                {accent_ == "white"
                  ? "black"
                  : accent_ == "black"
                  ? "white"
                  : accent_}
              </p>
            </div>
          </div>
          <div className={`flex flex-row ml-2 mb-1 mt-1`}>
            <FontAwesomeIcon
              icon={faWarning}
              className={`m-2 h-[30px] w-[30px] text-yellow-500 transition-all mt-[2.3px] duration-200`}
            />
            <p
              className={`text-[12px] opacity-50 font-normal mt-[1px] w-full italic`}
            >
              Designs cannot be reverted. Make sure the information above
              reflects your desired order.
            </p>
          </div>
          <p className={`text-[15px] opacity-50 font-bold mb-1 w-full`}>
            Price Summary
          </p>
          <div
            className={`w-[330px] h-[115px] bg-gray-50 border-solid border-gray-300 border-[0.5px] rounded-[4px] mb-1 p-2`}
          >
            <div className={`flex flex-row`}>
              <p className={`text-[14px] opacity-40 font-light mb-1 w-full`}>
                Material:
              </p>
              <p
                className={`text-[14px] opacity-40 font-light mb-1 w-full ml-auto capitalize`}
              >
                {article_ == "cap" ? "$15" : "$20"}
              </p>
            </div>
            <div className={`flex flex-row`}>
              <p className={`text-[14px] opacity-40 font-light mb-1 w-full`}>
                Labour:
              </p>
              <p
                className={`text-[14px] opacity-40 font-light mb-1 w-full ml-auto capitalize`}
              >
                $12
              </p>
            </div>
            <div className={`flex flex-row`}>
              <p className={`text-[14px] opacity-40 font-light mb-1 w-full`}>
                Shipping:
              </p>
              <p
                className={`text-[14px] opacity-40 font-light mb-1 w-full ml-auto capitalize`}
              >
                $35
              </p>
            </div>
            <div className={`flex flex-row`}>
              <p className={`text-[15px] opacity-70 font-medium mb-1 w-full`}>
                Total Price:
              </p>
              <p
                className={`text-[15px] opacity-70 font-medium mb-1 w-full ml-auto capitalize`}
              >
                {article_ == "cap" ? "$62" : "$67"}
              </p>
            </div>
          </div>
          <div className={`w-[330px] h-[80px] mb-1`}></div>
          {/* <input type={'email'} placeholder={`email`} className={`w-full h-[40px] rounded-[2px] p-2 border-solid border-[1px] border-gray-200 opacity-80 hover:opacity-100 transition-all duration-200 text-black/50 items-center justify-center font-light`} onChange={(e) => {
          setEmail_(e);
        }}/> */}
        </div>
        <div className={`w-[350px] h-[80px] px-1 py-1 flex flex-row items-end`}>
          <div
            className={`w-full h-[40px] rounded-[2px] m-1 bg-blue-500 opacity-60 hover:opacity-100 transition-all duration-200 text-white items-center justify-center flex flex-row font-bold cursor-pointer`}
            onClick={() => {
              makePayment(
                `{base: '${base_}', accent: '${accent_}', article: '${article_}', size: '${size_}', wallet: '${address_}', address: '${country_}', email: '${email_}', status: 'pending'}`
              );
              setNotification_(true);
            }}
          >
            Buy Design
          </div>
        </div>
      </div>
      <p className={`absolute bottom-[-93px] text-[15px] font-normal opacity-100 pl-[93px] w-full`}>
        Welcomes your creativity!
        </p>
      <div className={`absolute bottom-[-100px] w-full flex flex-row items-center opacity-60 justify-center`}>
      <img
          className="h-[80px] transition-all duration-200 m-2"
          src="/assets/images/LwaziNF.png"
        />
        <p className={`text-[50px] mb-4 font-light opacity-50 text-center`}>
        buy
        </p>
        <p className={`text-[50px] mb-4 font-black text-center`}>
        Design
        </p>
      </div>
    </div>
  );
};

export default Payments_;
