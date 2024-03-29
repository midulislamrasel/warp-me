import MYTasks from "../Tasks/MYTasks";
import StatsBoton from "./StatsBoton";
import StatsTop from "./StatsTop";
function Stats() {
  return (
    <div className="w-full  mr-[20px] ">
      <div className="bg-[#FFF] rounded-md mb-[20px]">
        <StatsTop />
        <StatsBoton />
      </div>
      <div className="bg-[#FFF] rounded-md">
        <MYTasks />
      </div>
    </div>
  );
}

export default Stats;
