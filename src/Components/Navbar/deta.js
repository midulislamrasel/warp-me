import { IoHome } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { IoMdCheckmark } from "react-icons/io";
import { MdOutlineTask } from "react-icons/md";
import { LuContact } from "react-icons/lu";
import { PiPhone } from "react-icons/pi";
import { LuFolderKey } from "react-icons/lu";
const navbar = [
  {
    id: "01",
    Icone: <IoHome />,
    Name: "Home",
  },
  {
    id: "02",
    Icone: <LuContact />,
    Name: " Contacts",
  },
  {
    id: "03",
    Icone: <PiPhone />,
    Name: "Contacts",
  },
  {
    id: "04",
    Icone: <LuFolderKey />,
    Name: " eSing",
  },
  {
    id: "05",
    Icone: <IoMdHome />,
    Name: "CRM",
  },
  {
    id: "06",
    Icone: <MdOutlineTask />,
    Name: " Tasks",
  },
  {
    id: "07",
    Icone: <IoMdCheckmark />,
    Name: "To - Dos",
  },
  {
    id: "08",
    Icone: <IoIosNotifications />,
    Name: " Notifications",
  },
];

export default navbar;
