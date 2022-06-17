import { ethers } from "ethers";
import abi from "../src/utils/BuyDesign.json";
import { useRecoilState } from "recoil";
import { articleState, colorState, sizeState, accentState, addressState, baseState, countryState, emailState, walletState } from "../components/atoms/atoms";

interface Payments_Props {}

const Payments_ = ({}: Payments_Props) => {
  const [accent_, setAccent_] = useRecoilState(accentState);
  const [base_, setBase_] = useRecoilState(baseState);
  const [address_, setAddress_] = useRecoilState(addressState);
  const [country_, setCountry_] = useRecoilState(countryState);
  const [email_, setEmail_] = useRecoilState(emailState);
  const [article_, setArticle_] = useRecoilState(articleState);
  const [size_, setSize_] = useRecoilState(sizeState);

  const makePayment = async (orderDetails_: string) => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const contractAddress = "0x206848ea41cEbe94fEe2Bf83D682aACB88b2f57D";
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
      className={`rounded-[4px] shadow-md bg-white w-[350px] h-[400px] absolute top-[70px] right-0 overflow-hidden`}
    >
      <div
        className={`w-[350px] h-[320px] p-2 items-center justify-start flex flex-col`}
      >
        <p className={`text-[15px] opacity-50 font-bold mb-1 w-full`}>
          Design Specs
        </p>
        <div
          className={`w-[330px] h-[150px] bg-gray-50 border-solid border-gray-300 border-[0.5px] rounded-[4px] mb-1`}
        ></div>
        <p className={`text-[15px] opacity-50 font-bold mb-1 w-full`}>
          Price Summary
        </p>
        <div className={`w-[330px] h-[80px] mb-1`}></div>
        {/* <input type={'email'} placeholder={`email`} className={`w-full h-[40px] rounded-[2px] p-2 border-solid border-[1px] border-gray-200 opacity-80 hover:opacity-100 transition-all duration-200 text-black/50 items-center justify-center font-light`} onChange={(e) => {
          setEmail_(e);
        }}/> */}
      </div>
      <div className={`w-[350px] h-[80px] px-1 py-1 flex flex-row items-end`}>
        <div
          className={`w-full h-[40px] rounded-[2px] m-1 bg-blue-500 opacity-60 hover:opacity-100 transition-all duration-200 text-white items-center justify-center flex flex-row font-bold cursor-pointer`}
          onClick={() => {
            makePayment(`{base: '${base_}', accent: '${accent_}', article: '${article_}', size: '${size_}', wallet: '${address_}', address: '${country_}', email: '${email_}', status: 'pending'}`);
            // console.log
          }}
        >
          Buy Design
        </div>
      </div>
    </div>
  );
};

export default Payments_;
