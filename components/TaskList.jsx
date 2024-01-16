import prisma from "@/utils/db";
import Link from "next/link";
import DeleteForm from "./DeleteForm";

const TaskList = async () => {
  const tasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  if (tasks.length === 0) {
    return <h2 className="text-lg font-medium">No tasks to show....</h2>;
  }
  return (
    <ul className="mt-6">
      {tasks.map((task) => {
        return (
          <li className="flex justify-between items-center px-6 py-4 mb-4 shadow-lg rounded-lg border border-base-300">
            <h2
              className={`text-lg font-medium ${
                task.completed ? "line-through" : null
              }`}
            >
              {task.content}
            </h2>
            <div className="flex items-center gap-6">
              <Link
                href={`/tasks/${task.id}`}
                className="btn btn-accent btn-xs"
              >
                edit
              </Link>
              <DeleteForm />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;
