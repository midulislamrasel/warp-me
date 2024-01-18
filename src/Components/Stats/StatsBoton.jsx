import statsData from "./statsData";

function StatsBoton() {
  return (
    <div>
      <div className="flex justify-between">
        {statsData.map((item) => (
          <div key={item.key} className=" pt-[22px] px-[40px] ">
            <h1 className=" mb-[16px] text-[42px] font-[400] border-r-2  border-indigo-500">
              {item.Count}
            </h1>
            <p className="mb-[6px] text-[16px]">{item.label}</p>
            <p className="mb-[30px] text-">{item.progress}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatsBoton;
