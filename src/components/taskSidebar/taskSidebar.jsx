import { Card } from "@/components//ui/card.jsx";
import styles from "./taskSidebar.module.css";

export function TaskSidebar() {
  return (
    <section
      className={`fixed right-4 top-4 max-h-screen ${styles.sidebarHeight} min-w-96`}
    >
      <Card className="flex flex-col h-full w-full p-6 justify-between">
        <p>User Profile</p>
        <p>Form</p>
        <p>Logout</p>
      </Card>
    </section>
  );
}
