import statsData from "./statsData";

function Stats() {
  return (
    <div>
      <div className="flex justify-between">
        <h1>Stats</h1>
        <button>Last 90 Day</button>
      </div>
      <div>
        <div className="flex gap-8 ">
          {statsData.map((item) => (
            <div
              key={item.key}
              className=" px-[62px] border-r-4 border-indigo-500"
            >
              <h1 className="text-3xl">{item.Count}</h1>
              <p className="text-[16px]">{item.label}</p>
              <p className="text-">{item.progress}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stats;
