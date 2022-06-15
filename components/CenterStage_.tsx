import { useRecoilState } from 'recoil'
import { colorState } from '../components/atoms/atoms'

interface CenterStage_Props {}

const CenterStage_ = ({}: CenterStage_Props) => {
  const [colors_, setColors_] = useRecoilState(colorState)
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
          style={{filter: colors_['pink']}}
        />
        <img
          src={`/assets/images/hoodie.png`}
          className={`h-full object-cover absolute left-[100px]`}
          style={{mixBlendMode: 'multiply'}}
        />
        <div
          className={`absolute h-[130px] w-[150px] mt-1 opacity-100 flex items-center justify-center left-[175px] top-[90px]`}
        >
          <img
            src={`/assets/images/LwaziNF.png`}
            className={`h-full object-cover`}
            style={{filter: colors_['blue']}}
          />
        </div>
        <div
          className={`w-[350px] h-[400px] ml-auto mr-[30px] bg-gray-50 border-solid border-gray-300 border-[0.5px] rounded-[4px] mb-1`}
        ></div>
      </div>
      <div
        className={`w-full h-[133px] flex flex-row items-center justify-center py-4`}
      >
        <div className={`h-full p-4 bg-gray-50 border-solid border-gray-200 border-[1px] flex items-center justify-center rounded-[4px] mx-1 cursor-pointer hover:bg-gray-100 transition-all duration-200`}>
          <img
            src={`/assets/images/hoodie.png`}
            className={`h-full object-cover`}
          />
        </div>
        {/* <div className={`h-full p-2`}>
          <img
            src={`/assets/images/shoe.png`}
            className={`h-full object-cover`}
          />
        </div> */}
        <div className={`h-full p-4 bg-gray-50 border-solid border-gray-200 border-[1px] flex items-center justify-center rounded-[4px] mx-1 cursor-pointer hover:bg-gray-100 transition-all duration-200`}>
          <img
            src={`/assets/images/cap.png`}
            className={`h-full object-cover`}
          />
        </div>
      </div>
    </div>
  );
};

export default CenterStage_;
