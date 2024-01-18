import RecentCallSection from "../RecentCallSection/RecentCallSection";

function StateTaskCall() {
  return (
    <div className="flex">
      <div>
        <div>Stats</div>
        <div>My Task</div>
      </div>
      <div>
        <RecentCallSection />
      </div>
    </div>
  );
}

export default StateTaskCall;
