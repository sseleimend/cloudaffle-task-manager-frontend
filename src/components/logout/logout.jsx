import { LogOut } from "lucide-react";
import { Button } from "../ui/button.jsx";

export function Logout() {
  return (
    <div className="flex justify-end">
      <Button variant="outline" size="icon">
        <LogOut className="size-4" />
      </Button>
    </div>
  );
}
