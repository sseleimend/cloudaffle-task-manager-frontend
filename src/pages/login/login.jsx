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
import { Link, useNavigate } from "react-router";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schema/login.schema.js";
import { useLogin } from "@/hooks/useLogin.hook.js";
import { useEffect } from "react";
import { Toaster } from "@/components/ui/sonner.jsx";
import { toast } from "sonner";

export default function Login() {
  const form = useForm({
    resolver: zodResolver(LoginSchema),
  });
  const { mutate, isError, isSuccess } = useLogin();
  const navigate = useNavigate();

  function onSubmit(values) {
    mutate(values);
    form.reset();
  }

  useEffect(() => {
    if (isSuccess) {
      navigate("/tasks");
    }
  }, [isSuccess, navigate]);

  useEffect(() => {
    if (isError) {
      toast("Uh ho! Your request has failed", {
        description: "Please check your login details",
        style: {
          backgroundColor: "var(--color-destructive)",
        },
        cancel: {
          label: "X",
        },
      });
    }
  }, [isError]);

  return (
    <section className="flex flex-row w-full max-w-7xl min-h-screen justify-center items-center">
      <div className="w-4/12">
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Login and create tasks</CardDescription>
          </CardHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <CardContent>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="mb-4">
                      <FormControl>
                        <Input
                          placeholder="Email"
                          {...field}
                          value={field.value ?? ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="mb-4">
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Password"
                          {...field}
                          value={field.value ?? ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
              <CardFooter className="flex flex-row justify-between">
                <p className="basis-1/2">
                  Don’t have an account?{" "}
                  <Link to="/signup" className="text-blue-500">
                    Signup Here
                  </Link>
                </p>
                <Button type="submit">Login</Button>
              </CardFooter>
            </form>
          </Form>
        </Card>
      </div>
      <Toaster />
    </section>
  );
}
