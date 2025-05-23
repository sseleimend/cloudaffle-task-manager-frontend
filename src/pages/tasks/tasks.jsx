import { FilterBar } from "@/components/filterBar/filterBar.jsx";
import { Task } from "@/components/task/task.jsx";
import { TasksCounter } from "@/components/tasksCounter/tasksCounter.jsx";
import { TaskSidebar } from "@/components/taskSidebar/taskSidebar.jsx";

export default function Tasks() {
  return (
    <section className="flex flex-row w-full p-4 gap-8">
      <section className="flex  basis-2/3 justify-center">
        <div className="flex flex-col w-10/12 p-4 items-center">
          <h1 className="font-bold text-2xl mb-8 w-full">
            Tasks as on: Wednesday, 1 Jan 2025
          </h1>
          <div className="w-11/12 flex flex-col">
            <div className="flex justify-between mb-16">
              <TasksCounter count={4} type="todo" />
              <TasksCounter count={10} type="inProgress" />
              <TasksCounter count={12} type="completed" />
            </div>
            <FilterBar />
            <Task />
          </div>
        </div>
      </section>
      <section className="flex basis-1/3">
        <TaskSidebar />
      </section>
    </section>
  );
}
