import { FaVideo } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { FaRegCalendarPlus } from "react-icons/fa6";
import { LuFilePlus } from "react-icons/lu";
function Header() {
  return (
    <div>
      <h1 className=" mb-[36px] mt-[32px] text-[24px] font-[700] text-[#122341]">
        Welcome, Shaya
      </h1>
      <div className="flex justify-between gap-8   ">
        <div className="w-[371px]  py-[18px] px-[20px] bg-sky-300 rounded-md ">
          <div className=" flex items-center justify-between">
            <div className=" flex items-center gap-5">
              <FaVideo className="w-[32px] h-[32px] text-[#29658A]" />
              <h1 className="text-[16px] font-[700] text-[#29658A]">
                Start A meeting
              </h1>
            </div>
            <div>
              <FaArrowRight className="w-[24px] h-[24px] text-[#29658A]" />
            </div>
          </div>
        </div>
        <div className="w-[371px]  py-[18px] px-[20px]  bg-slate-200  rounded-md">
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
        <div className="w-[371px]  py-[18px] px-[20px] bg-slate-200  rounded-md">
          <div className=" flex items-center justify-between">
            <div className=" flex items-center gap-5">
              <LuFilePlus className="w-[32px] h-[32px] text-[#29658A]" />
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

// flex items-center justify-between
// flex items-center gap-3
