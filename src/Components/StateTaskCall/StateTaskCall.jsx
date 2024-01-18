import RecentCallSection from "../RecentCallSection/RecentCallSection";
import Stats from "../Stats/Stats";

function StateTaskCall() {
  return (
    <div className=" mt-[20px]">
      <div className="flex justify-between">
        <Stats />
        <RecentCallSection />
      </div>
    </div>
  );
}

export default StateTaskCall;
