import { OrderSelect } from "../orderSelect/orderSelect.jsx";
import { TaskPagination } from "../taskPagination/taskPagination.jsx";

export function FilterBar() {
  return (
    <>
      <nav className="flex flex-row justify-between">
        <TaskPagination />
        <OrderSelect />
      </nav>
    </>
  );
}
