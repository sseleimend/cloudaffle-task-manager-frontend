import { Button } from "@/components/ui/button.jsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "react-router";

export default function Login() {
  return (
    <section className="flex flex-row w-full max-w-7xl min-h-screen justify-center items-center">
      <div className="w-4/12">
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Login and create tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <Input className="mb-4" type="email" placeholder="Email" />
            <Input className="mb-4" type="password" placeholder="Password" />
          </CardContent>
          <CardFooter className="flex flex-row justify-between">
            <p className="basis-1/2">
              Don’t have an account?{" "}
              <Link to="/signup" className="text-blue-500">
                Signup Here
              </Link>
            </p>
            <Button>Login</Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
