import { Card } from "@/components//ui/card.jsx";
import styles from "./taskSidebar.module.css";
import { UserProfile } from "../userProfile/userProfile.jsx";
import { CreateTaskForm } from "../createTaskForm/createTaskForm.jsx";
import { Logout } from "../logout/logout.jsx";
import Cookies from "js-cookie";

export function TaskSidebar() {
  const user = JSON.parse(Cookies.get("user"));

  return (
    <section
      className={`fixed right-4 top-4 max-h-screen ${styles.sidebarHeight} min-w-lg`}
    >
      <Card className="flex flex-col h-full w-full p-6 justify-between">
        <UserProfile firstName={user ? user.firstName : ""} />
        <CreateTaskForm />
        <Logout />
      </Card>
    </section>
  );
}
