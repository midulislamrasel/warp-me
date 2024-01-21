import { FaPhoneSlash } from "react-icons/fa6";
function RecentCallSection() {
  const recentCall = [
    {
      id: "01",
      Icon: <FaPhoneSlash />,
      name: "Sidul",
      phNum: "01544582",
      callName: "VIA SALER HD",
      minago: "1m ago",
      callTime: "14:01",
    },
    {
      id: "02",
      Icon: <FaPhoneSlash />,
      name: "Sidul",
      phNum: "01544582",
      callName: "VIA SALER HD",
      minago: "1m ago",
      callTime: "14:01",
    },
    {
      id: "03",
      Icon: <FaPhoneSlash />,
      name: "Sidul",
      phNum: "01544582",
      callName: "VIA SALER HD",
      minago: "1m ago",
      callTime: "14:01",
    },
    {
      id: "04",
      Icon: <FaPhoneSlash />,
      name: "Sidul",
      phNum: "01544582",
      callName: "VIA SALER HD",
      minago: "1m ago",
      callTime: "14:01",
    },
    {
      id: "05",
      Icon: <FaPhoneSlash />,
      name: "Sidul",
      phNum: "01544582",
      callName: "VIA SALER HD",
      minago: "1m ago",
      callTime: "14:01",
    },
    {
      id: "06",
      Icon: <FaPhoneSlash />,
      name: "Sidul",
      phNum: "01544582",
      callName: "VIA SALER HD",
      minago: "1m ago",
      callTime: "14:01",
    },
  ];
  return (
    <div className=" w-[332px]  p-[20px] bg-[#FFF] rounded-md">
      <div className="flex justify-between mb-[16px]">
        <h1 className="text-[16px] font-[700] ">Recent Call Logs</h1>
        <p className="text-[14px] font-[400]">View All</p>
      </div>
      <div>
        {recentCall.map(
          ({ id, name, Icon, phNum, callName, minago, callTime }) => (
            <div key={id} className="mb-[16px]">
              <div className="flex justify-between">
                <div className="flex  items-center">
                  <h2 className=" text-[16px] mr-[14px] ">{Icon}</h2>
                  <div>
                    <div className="flex">
                      <h1 className="text-[14px] font-[400]">{name}</h1>
                      <h1 className="text-[12px] font-[400]">{phNum}</h1>
                    </div>
                    <div className="flex items-center">
                      <h1 className="text-[10px] font-[700]">{callName}</h1>
                      <h1 className="text-[10px] tex-[#2D9CDB] bg-[#d2dfe7] rounded-md px-[4px]">
                        {callTime}
                      </h1>
                    </div>
                  </div>
                </div>
                <h1 className="text-[12px] font-[400]">{minago}</h1>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default RecentCallSection;
