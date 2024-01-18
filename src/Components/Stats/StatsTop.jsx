import { FaCaretDown } from "react-icons/fa";

function StatsTop() {
  return (
    <div>
      <div className="flex justify-between pt-[18px] px-[20px]">
        <h1 className="text-[16px] font-[700]">Stats</h1>
        <div className="flex items-center gap-[4px]">
          <button className="text-[14px]">Last 90 Day </button>
          <span className="text-[16px] text-gray-400">
            <FaCaretDown />
          </span>
        </div>
      </div>
    </div>
  );
}

export default StatsTop;
