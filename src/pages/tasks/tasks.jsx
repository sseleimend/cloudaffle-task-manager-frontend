import { FilterBar } from "@/components/filterBar/filterBar.jsx";
import { Task } from "@/components/task/task.jsx";
import { TasksCounter } from "@/components/tasksCounter/tasksCounter.jsx";
import { TaskSidebar } from "@/components/taskSidebar/taskSidebar.jsx";
import { useFetchTasks } from "@/hooks/useFetchTasks.hook.js";
import { useContext, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { TasksContext } from "@/context/tasks.context.jsx";
import { useSearchParams } from "react-router";

function DisplaySkeleton() {
  return (
    <div className="flex items-center space-x-4 mb-12">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[500px]" />
        <Skeleton className="h-4 w-[400px]" />
      </div>
    </div>
  );
}

function todaysDate() {
  const today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
  };

  const formattedDate = today.toLocaleDateString("en-US", options);

  return formattedDate;
}

export default function Tasks() {
  const [searchParams] = useSearchParams();
  let limit = Number(searchParams.get("limit") ?? 5);
  let page = Number(searchParams.get("page") ?? 1);
  let order = searchParams.get("order") ?? "asc";

  const { tasks, setTasks } = useContext(TasksContext);

  const { data } = useFetchTasks({
    order: order,
    limit: limit,
    page: page,
  });

  useEffect(() => {
    if (data) {
      setTasks(data);
    }
  }, [data, setTasks]);

  console.log(data);

  return (
    <section className="flex flex-row w-full p-4 gap-8">
      <section className="flex  basis-2/3 justify-center">
        <div className="flex flex-col w-10/12 p-4 items-center">
          <h1 className="font-bold text-2xl mb-8 w-full">
            Tasks as on: {todaysDate()}
          </h1>
          <div className="w-11/12 flex flex-col">
            <div className="flex justify-between mb-16">
              <TasksCounter
                count={tasks ? tasks.pagination.meta.todoTasks : 0}
                type="todo"
              />
              <TasksCounter
                count={tasks ? tasks.pagination.meta.inProgressTasks : 0}
                type="inProgress"
              />
              <TasksCounter
                count={tasks ? tasks.pagination.meta.completedTasks : 0}
                type="completed"
              />
            </div>
            <FilterBar />
            {!data &&
              [...Array(limit)].map((_, index) => (
                <DisplaySkeleton key={`${index}skel`} />
              ))}
            {data &&
              data.data.map((task) => (
                <Task
                  key={task["_id"]}
                  title={task.title}
                  priority={task.priority}
                  status={task.status}
                  dueDate={new Date(task.dueDate)}
                  description={task.description}
                  id={task["_id"]}
                />
              ))}
          </div>
        </div>
      </section>
      <section className="flex basis-1/3">
        <TaskSidebar />
      </section>
    </section>
  );
}
