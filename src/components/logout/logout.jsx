import { LogOut } from "lucide-react";
import { Button } from "../ui/button.jsx";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";

export function Logout() {
  const navigate = useNavigate();

  function handleClick() {
    Cookies.remove("token");
    navigate("/");
  }

  return (
    <div className="flex justify-end">
      <Button onClick={handleClick} variant="outline" size="icon">
        <LogOut className="size-4" />
      </Button>
    </div>
  );
}
