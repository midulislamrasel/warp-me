import recentCall from "./callDeta";

function RecentCallSection() {
  return (
    <div>
      <div className="flex justify-between">
        <h5>Recent Call Logs</h5>
        <p>View All</p>
        {recentCall.map(({ id, Icon, name }) => {
          // console.log(id, Icon, name);
          <div key={id}>
            <p>{Icon}</p>
            <p>{name}</p>
          </div>;
        })}
      </div>
    </div>
  );
}

export default RecentCallSection;
