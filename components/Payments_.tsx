interface Payments_Props {
    
}
 
const Payments_ = ({}:Payments_Props) => {
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
        </div>
        <div className={`w-[350px] h-[80px] px-1 py-1 flex flex-row items-end`}>
          <div
            className={`w-full h-[40px] rounded-[2px] m-1 bg-blue-500 opacity-60 hover:opacity-100 transition-all duration-200 text-white items-center justify-center flex flex-row font-bold cursor-pointer`}
          >
            Buy Design
        </div>
        </div>
      </div>
    );
}
 
export default Payments_;