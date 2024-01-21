const Task_Table = [
  {
    id: "01",
    task: "Midul Islam",
    assigned: {
      img: "IMG",
      name: "Sharon Williams",
    },
    status: "TO-do",
    dueDate: " Thu, Mar 10",
  },
  {
    id: "02",
    task: "Midul Islam",
    assigned: {
      img: "IMG",
      name: "Sharon Williams",
    },
    status: "TO-do",
    dueDate: " Thu, Mar 10",
  },
  {
    id: "03",
    task: "Midul Islam",
    assigned: {
      img: "IMG",
      name: "Sharon Williams",
    },
    status: "TO-do",
    dueDate: " Thu, Mar 10",
  },
];

function TaskTable() {
  console.log(Task_Table);
  return (
    <div>
      <div className=" bg-sky-300 grid grid-cols-2 pl-[20px] pt-[19px] pb-[7px]">
        <div>
          <h1>TASK</h1>
        </div>
        <div className=" flex justify-between">
          <h1>ASSIGNED BY</h1>
          <h1>STATUS</h1>
          <h1 className="pr-[33px]">DUE DATE</h1>
        </div>
      </div>
      {Task_Table.map((itme) => (
        <div
          key={itme.id}
          className="grid grid-cols-2 pl-[20px] pt-[19px] pb-[7px]"
        >
          <div>
            <h1>{itme.task}</h1>
          </div>
          <div className="flex justify-between">
            <div className="flex  gap-2">
              <h1>{itme.assigned.img}</h1>
              <h1>{itme.assigned.name}</h1>
            </div>
            <h1 className="tex-[#2D9CDB] px-[10px] bg-[#d2dfe7] ">
              {itme.status}
            </h1>
            <h1 className="pr-[33px]">{itme.dueDate}</h1>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskTable;
