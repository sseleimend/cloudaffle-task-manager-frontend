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

export function Task() {
  return (
    <Card className="w-full mb-8">
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle className="basis-2/3 leading-8">Title of the Task</CardTitle>
        <div>
          <Badge variant="outline" className="mr-2">
            1 Jan, 2025
          </Badge>
          <Badge>normal</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription>Description of the task</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex items-center">
          <Switch id="in-progress" />
          <Label className="ml-4" htmlFor="in-progress">
            In Progress
          </Label>
        </div>
        <Button>Completed</Button>
      </CardFooter>
    </Card>
  );
}
