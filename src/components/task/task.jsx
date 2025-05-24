import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge.jsx";
import { Switch } from "@/components/ui/switch.jsx";
import { Label } from "@/components/ui/label.jsx";
import { Button } from "@/components/ui/button.jsx";
import { useUpdateTask } from "@/hooks/useUpdateTask.hook.js";
import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

export function Task({
  title = "Default Title",
  description = "Default description",
  status = "todo",
  priority = "normal",
  dueDate = new Date("2025-01-01T12:00:00.000Z"),
  id,
}) {
  const { mutate, isSuccess } = useUpdateTask();
  const [progress, setProgress] = useState(false);
  const queryClient = useQueryClient();

  let formattedDate = dueDate.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  useEffect(() => {
    if (status === "inProgress") {
      setProgress(true);
    }
  }, [status]);

  useEffect(() => {
    if (isSuccess) {
      queryClient.invalidateQueries({
        queryKey: ["fetchTasks"],
        refetchType: "all",
      });
    }
  }, [isSuccess, queryClient]);

  function handleProgressChange(value) {
    setProgress(value);
    mutate({
      _id: id,
      status: value ? "inProgress" : "todo",
    });
  }

  return (
    <Card className="w-full mb-8">
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle className="basis-2/3 leading-8">{title}</CardTitle>
        <div>
          <Badge variant="outline" className="mr-2">
            {formattedDate}
          </Badge>
          <Badge
            className={`${priority === "normal" && "bg-sky-800"} ${
              priority === "high" && "bg-red-800"
            } ${priority === "low" && "bg-green-800"} text-white`}
          >
            {priority}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex items-center">
          <Switch
            checked={progress}
            onCheckedChange={handleProgressChange}
            id="in-progress"
          />
          <Label className="ml-4" htmlFor="in-progress">
            In Progress
          </Label>
        </div>
        <Button>Completed</Button>
      </CardFooter>
    </Card>
  );
}
