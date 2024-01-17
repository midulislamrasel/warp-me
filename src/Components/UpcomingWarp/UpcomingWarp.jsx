import { IoWomanSharp } from "react-icons/io5";
import { BiSolidPaint } from "react-icons/bi";
import { FaRegCopy } from "react-icons/fa";
function UpcomingWarp() {
  return (
    <div>
      <div className=" ">
        <div className="pt-[18px] py-[20px]">
          <div className="flex justify-between w-full">
            <h1 className="text-[16px] font-[700] text-[#060F14]">
              Upcoming Warp Meetings
            </h1>
            <h1>View All</h1>
          </div>
        </div>
        {/* ======== */}
        <div className="flex justify-between">
          <div className="border border-red rounded-md">
            <div className=" px-[18px] py-[16px] flex justify-between bg-indigo-400">
              <div className="mr-[24px] ">
                <p className="text-[12px] font-[400]">Starting In </p>
                <h3 className="text-[14px] font-[700]">12 Minit </h3>
              </div>
              <div className="flex items-center gap-5">
                <button className=" font-[FE654F] text-[#FE654F] text-[14px] font-[600] border-4 border-red px-[11px] py-[9px] rounded-md mr-[10px]">
                  Connect
                </button>
                <BiSolidPaint className="mr-[10px]" />
                <FaRegCopy className="mr-[10px]" />
              </div>
            </div>
            <div className="bg-sky-300">
              <div className="px-[18px] py-[16px]">
                <h1 className="text-[14px] font-[700]">
                  Lorem Isum Meeting Title
                </h1>
                <h1 className="flex items-center">
                  <span>
                    <IoWomanSharp />
                  </span>
                  <p className="text-[14px] font-[400]"> 6 Participants</p>
                </h1>
              </div>
            </div>
          </div>
          <div>
            <div className=" flex justify-between bg-indigo-400">
              <div>
                <p>Starting In </p>
                <h3>12Minit </h3>
              </div>
              <div className="flex items-center gap-5">
                <button>Connect</button>
                <BiSolidPaint />
                <FaRegCopy />
              </div>
            </div>
            <div className="bg-sky-300">
              <h1>Lorem Isum Meeting Title</h1>
              <h1 className="flex items-center">
                <span>
                  <IoWomanSharp />
                </span>{" "}
                Lorem Isum Meeting Title
              </h1>
            </div>
          </div>
          <div>
            <div className=" flex justify-between bg-indigo-400">
              <div>
                <p>Starting In </p>
                <h3>12Minit </h3>
              </div>
              <div className="flex items-center gap-5">
                <button>Connect</button>
                <BiSolidPaint />
                <FaRegCopy />
              </div>
            </div>
            <div className="bg-sky-300">
              <h1>Lorem Isum Meeting Title</h1>
              <h1 className="flex items-center">
                <span>
                  <IoWomanSharp />
                </span>{" "}
                Lorem Isum Meeting Title
              </h1>
            </div>
          </div>
          <div>
            <div className=" flex justify-between bg-indigo-400">
              <div>
                <p>Starting In </p>
                <h3>12Minit </h3>
              </div>
              <div className="flex items-center gap-5">
                <button>Connect</button>
                <BiSolidPaint />
                <FaRegCopy />
              </div>
            </div>
            <div className="bg-sky-300">
              <h1>Lorem Isum Meeting Title</h1>
              <h1 className="flex items-center">
                <span>
                  <IoWomanSharp />
                </span>{" "}
                Lorem Isum Meeting Title
              </h1>
            </div>
          </div>
        </div>
        {/* ========= */}
      </div>
    </div>
  );
}

export default UpcomingWarp;

//  <div>
// <div className=" flex justify-between bg-indigo-400">
//   <div>
//     <p>Starting In </p>
//     <h3>12Minit </h3>
//   </div>
//   <div className="flex items-center gap-5">
//     <button>Connect</button>
//     <BiSolidPaint />
//     <FaRegCopy />
//   </div>
// </div>
// <div className="bg-sky-300">
//   <h1>Lorem Isum Meeting Title</h1>
//   <h1 className="flex items-center">
//     <span>
//       <IoWomanSharp />
//     </span>{" "}
//     Lorem Isum Meeting Title
//   </h1>
// </div>
// </div>
