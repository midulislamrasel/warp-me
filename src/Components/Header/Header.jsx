import { FaVideo } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { FaRegCalendarPlus } from "react-icons/fa6";
import { LuFilePlus } from "react-icons/lu";
function Header() {
  return (
    <div>
      <h1 className=" mb-[36px] mt-[32px] text-[24px] font-[700] text-[#29658A]">
        Welcome, Shaya
      </h1>
      <div className="flex justify-between gap-8   ">
        <div className="w-[371px]  py-[18px] px-[20px] bg-[#29658A] rounded-md ">
          <div className=" flex items-center justify-between">
            <div className=" flex items-center gap-5">
              <FaVideo className="w-[32px] h-[32px] text-[#FFF]" />
              <h1 className="text-[16px] font-[700] text-[#FFF]">
                Start A meeting
              </h1>
            </div>
            <div>
              <FaArrowRight className="w-[24px] h-[24px] text-[#FFF]" />
            </div>
          </div>
        </div>
        <div className="w-[371px]  py-[18px] px-[20px]  bg-[#FFF] shadow-lg  rounded-md">
          <div className=" flex items-center justify-between">
            <div className=" flex items-center gap-5">
              <FaRegCalendarPlus className="w-[32px] h-[32px] text-[#29658A]" />
              <h1 className="text-[16px] font-[700] text-[#29658A]">
                Start A meeting
              </h1>
            </div>
            <div>
              <FaArrowRight className="w-[24px] h-[24px] text-[#29658A]" />
            </div>
          </div>
        </div>
        <div className="w-[371px]  py-[18px] px-[20px]  bg-[#FFF] shadow-lg  rounded-md">
          <div className=" flex items-center justify-between">
            <div className=" flex items-center gap-5">
              <FaRegCalendarPlus className="w-[32px] h-[32px] text-[#29658A]" />
              <h1 className="text-[16px] font-[700] text-[#29658A]">
                Start A meeting
              </h1>
            </div>
            <div>
              <FaArrowRight className="w-[24px] h-[24px] text-[#29658A]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
