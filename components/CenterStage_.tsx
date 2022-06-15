interface CenterStage_Props {}

const CenterStage_ = ({}: CenterStage_Props) => {
  return (
    <div
      className={`rounded-[4px] shadow-md bg-white w-[830px] h-[600px] absolute top-[70px] left-0 overflow-hidden`}
    >
      <div className={`w-full h-[35px] bg-green-300`} />
      <div
        className={`w-full h-[400px] mt-[40px] flex flex-row items-center justify-center relative`}
      >
        <img
          src={`/assets/images/hoodie.png`}
          className={`h-full object-cover ml-[100px]`}
        />
        <div className={`absolute h-[130px] w-[150px] mt-1 opacity-90 flex items-center justify-center left-[175px] top-[90px]`}>
          <img
            src={`/assets/images/LwaziNF.png`}
            className={`h-full object-cover`}
          />
        </div>
        <div
          className={`w-[350px] h-[400px] ml-auto mr-[30px] bg-gray-50 border-solid border-gray-300 border-[0.5px] rounded-[4px] mb-1`}
        ></div>
      </div>
    </div>
  );
};

export default CenterStage_;
