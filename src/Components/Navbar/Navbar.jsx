import { IoMdHome } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { IoMdCheckmark } from "react-icons/io";
import { MdOutlineTask } from "react-icons/md";
import { LuContact } from "react-icons/lu";
import { PiPhone } from "react-icons/pi";
import { LuFolderKey } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";
function Navbar() {
  return (
    <div className=" h-[840px]  flex flex-col justify-between ">
      <div>
        <div className="mt-[31px] mb-[28px]">
          {/* <img src="" alt="Logo" /> */}
          <h2 className="text-[26px]">WARP ME</h2>
        </div>

        <div>
          <div className="flex items-center gap-[10px] text-gray-400 mb-[18px]">
            <IoMdHome className="" />
            <p className="text-[14px] font-[700] "> Home</p>
          </div>
          <div className="flex items-center gap-[10px] text-gray-400 mb-[18px]">
            <LuContact />
            <p className="text-[14px] font-[700] "> Contacts</p>
          </div>
          <div className="flex items-center gap-[10px] text-gray-400 mb-[18px]">
            <PiPhone />
            <p className="text-[14px] font-[700] "> Contacts</p>
          </div>
          <div className="flex items-center gap-[10px] text-gray-400 mb-[18px]">
            <LuFolderKey />
            <p className="text-[14px] font-[700] "> eSing</p>
          </div>
          <div className="flex items-center gap-[10px] text-gray-400 mb-[18px]">
            <IoMdHome />
            <p className="text-[14px] font-[700] "> CRM</p>
          </div>
          <div className="flex items-center gap-[10px] text-gray-400 mb-[18px]">
            <MdOutlineTask />
            <p className="text-[14px] font-[700] "> Tasks</p>
          </div>
          <div className="flex items-center gap-[10px] text-gray-400 mb-[18px]">
            <IoMdCheckmark />
            <p className="text-[14px] font-[700] "> To - Dos</p>
          </div>
          <div className="flex items-center gap-[10px] text-gray-400 mb-[18px]">
            <IoIosNotifications />
            <p className="text-[14px] font-[700] "> Notifications</p>
          </div>
        </div>
      </div>

      <div className="">
        <div className="flex items-center mb-[29px]">
          {/* <img src="./image.png" alt="" /> */}
          <h1>Img</h1>
          <div className="">
            <h1 className="text-[14px] font-[700] text-secndary">
              Chay Poltrlk
            </h1>
            <p className="text-[14px] font-[400] text-gray-400">Available</p>
          </div>
        </div>
        <div className="flex items-center gap-[10px] text-gray-400 mb-[18px]">
          <CiSettings />
          <p className="text-[14px] font-[700] "> Settings</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
