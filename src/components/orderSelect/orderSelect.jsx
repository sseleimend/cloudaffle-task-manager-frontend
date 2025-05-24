import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TasksContext } from "@/context/tasks.context.jsx";
import { extractQueryString } from "@/lib/extractQueryString.js";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

export function OrderSelect() {
  const { tasks } = useContext(TasksContext);
  const [query, setQuery] = useState();
  const order = tasks
    ? extractQueryString(tasks.pagination.links.currentPage).get("order")
    : undefined;
  const [currentOrder, setCurrentOrder] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (tasks) {
      const currentPage = extractQueryString(
        tasks.pagination.links.currentPage
      );
      const query = currentPage
        ? `/tasks?limit=${currentPage.get("limit")}&page=${currentPage.get(
            "page"
          )}`
        : "/tasks";
      setQuery(query);
    }
  }, [tasks]);

  useEffect(() => {
    if (currentOrder && query) {
      navigate(`${query}&order=${currentOrder}`);
    }
    if (currentOrder && !query) {
      navigate(`/tasks/?order=${currentOrder}`);
    }
  }, [currentOrder, navigate, query]);

  return (
    <Select
      value={currentOrder ?? order}
      onValueChange={(value) => setCurrentOrder(value)}
    >
      <SelectTrigger className="w-[140px]">
        <SelectValue placeholder="Select order" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="asc">Asc</SelectItem>
          <SelectItem value="dsc">Dsc</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
