"use client";
import { Container, TextField } from "@radix-ui/themes";
import "easymde/dist/easymde.min.css";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SimpleMDE from "react-simplemde-editor";

type IssueForm = {
  title: string;
  description: string;
};

export default function CreateIssue() {
  const [isLoading, setLoading] = useState(false);
  const { handleSubmit, register, control } = useForm<IssueForm>();
  const router = useRouter();
  const submitHandler: SubmitHandler<IssueForm> = async (data) => {
    setLoading(true);
    const res = await fetch("/api/issues/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const createdData = await res.json();
    setLoading(false);
    if (createdData.status === "success") {
      router.push("/issues");
      router.refresh();
    }
  };

  return (
    <Container className="w-[min(100%,520px)]">
      <form className="space-y-5" onSubmit={handleSubmit(submitHandler)}>
        <TextField.Root>
          <TextField.Input
            placeholder="Issue title ... "
            {...register("title")}
          />
        </TextField.Root>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="description ..." {...field} />
          )}
        />
        <button
          disabled={isLoading}
          type="submit"
          className="px-4 py-2 text-white bg-violet-600"
        >
          {" "}
          {isLoading ? "Loading..." : "Submit Issues"}
        </button>
      </form>
    </Container>
  );
}
