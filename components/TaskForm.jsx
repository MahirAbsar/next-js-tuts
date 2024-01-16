const TaskForm = () => {
  return (
    <div className="join mb-4 w-full">
      <input
        className="input input-bordered join-item w-full"
        placeholder="Type your task..."
      />
      <button className="btn join-item rounded-r-full">Add</button>
    </div>
  );
};

export default TaskForm;
