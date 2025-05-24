import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { TasksContext } from "@/context/tasks.context.jsx";
import { extractQueryString } from "@/lib/extractQueryString.js";
import { useContext, useEffect, useState } from "react";

export function TaskPagination() {
  const [links, setLinks] = useState();
  const [meta, setMeta] = useState();
  const { tasks } = useContext(TasksContext);

  const previousPage = links?.previous
    ? extractQueryString(links.previous).toString()
    : "#";
  const nextPage = links?.next
    ? extractQueryString(links.next).toString()
    : "#";
  const order = links?.currentPage
    ? extractQueryString(links.currentPage).get("order")
    : "#";

  useEffect(() => {
    if (tasks) {
      setLinks(tasks.pagination.links);
      setMeta(tasks.pagination.meta);
    }
  }, [tasks]);

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious to={`/tasks?${previousPage}`} />
        </PaginationItem>
        {meta &&
          [...Array(meta.totalPages)].map((_, index) => (
            <PaginationItem key={`pag${index}`}>
              <PaginationLink
                to={`/tasks/?limit=${meta.itemsPerPage}&page=${
                  index + 1
                }&order=${order}`}
                isActive={index + 1 === meta.currentPage}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

        <PaginationItem>
          <PaginationNext to={`/tasks?${nextPage}`} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
