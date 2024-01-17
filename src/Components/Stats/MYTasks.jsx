function MYTasks() {
  return (
    <div>
      <div>
        <h1>My Tasks </h1>
        <button> View All</button>
      </div>
      <div>
        <div className="grid">
          <div className="grid-col-6">Task</div>
          <div className="grid-col-2">Assigned By</div>
          <div className="grid-col-2">Status</div>
          <div className="grid-col-2">Due Date</div>
        </div>
      </div>
    </div>
  );
}

export default MYTasks;
