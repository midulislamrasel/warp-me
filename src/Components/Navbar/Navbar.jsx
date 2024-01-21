import { IoMdHome } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { IoMdCheckmark } from "react-icons/io";
import { MdOutlineTask } from "react-icons/md";
import { LuContact } from "react-icons/lu";
import { PiPhone } from "react-icons/pi";
import { LuFolderKey } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";
import logo from "../../../public/logo.svg";
import image from "../../../public/image.png";
// import navbar from "./deta";
function Navbar() {
  return (
    <div className=" max-h-[840px]  flex flex-col justify-between ">
      <div>
        <div className="mt-[31px] mb-[28px]">
          <img className="text-[26px]" src={logo} alt="logo" />
        </div>
        <div>
          <div className="flex items-center gap-[10px] text-gray-400 mb-[18px]">
            <IoMdHome className="" />
            <a className="text-[14px] font-[700] " href="#">
              Home
            </a>
          </div>
          <div className="flex items-center gap-[10px] text-gray-400 mb-[18px]">
            <LuContact />
            <a className="text-[14px] font-[700] " href="#">
              Contacts
            </a>
          </div>
          <div className="flex items-center gap-[10px] text-gray-400 mb-[18px]">
            <PiPhone />
            <a className="text-[14px] font-[700] " href="#">
              {" "}
              Contacts
            </a>
          </div>
          <div className="flex items-center gap-[10px] text-gray-400 mb-[18px]">
            <LuFolderKey />
            <a className="text-[14px] font-[700] " href="#">
              {" "}
              eSing
            </a>
          </div>
          <div className="flex items-center gap-[10px] text-gray-400 mb-[18px]">
            <IoMdHome />
            <a className="text-[14px] font-[700] " href="#">
              {" "}
              CRM
            </a>
          </div>
          <div className="flex items-center gap-[10px] text-gray-400 mb-[18px]">
            <MdOutlineTask />
            <a className="text-[14px] font-[700] " href="#">
              {" "}
              Tasks
            </a>
          </div>
          <div className="flex items-center gap-[10px] text-gray-400 mb-[18px]">
            <IoMdCheckmark />
            <a className="text-[14px] font-[700] " href="#">
              {" "}
              To - Dos
            </a>
          </div>
          <div className="flex items-center gap-[10px] text-gray-400 mb-[18px]">
            <IoIosNotifications />
            <a className="text-[14px] font-[700] " href="#">
              {" "}
              Notifications
            </a>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex items-center mb-[29px]">
          <img className=" rounded-md mr-1" src={image} alt="img" />
          <div className="">
            <h1 className="text-[14px] font-[700] text-secndary">
              Chay Poltrlk
            </h1>
            <p className="text-[14px] font-[400] text-gray-400">Available</p>
          </div>
        </div>
        <div className="flex items-center gap-[10px] text-gray-400 mb-[18px]">
          <CiSettings />
          <a className="text-[14px] font-[700] " href="#">
            {" "}
            Settings
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

// {/* ========= */}
// {navbar.map((item) => {
//   <div key={item.id}>
//     <div className="flex items-center gap-[10px] text-gray-400 mb-[18px]">
//       <IoMdHome className="" />
//       <a className="text-[14px] font-[700] " href="#">
//         Home
//       </a>
//     </div>
//   </div>;
// })}
// {/* ========= */}
