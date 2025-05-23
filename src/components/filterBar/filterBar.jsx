import { TaskPagination } from "../taskPagination/taskPagination.jsx";

export function FilterBar() {
  return (
    <>
      <nav className="flex flex-row justify-between">
        <TaskPagination />
        <p></p>
      </nav>
    </>
  );
}
