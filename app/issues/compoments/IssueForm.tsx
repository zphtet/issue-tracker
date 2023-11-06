"use client";
import { Container, TextField } from "@radix-ui/themes";
import "easymde/dist/easymde.min.css";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SimpleMDE from "react-simplemde-editor";
import { Issue } from "@prisma/client";
import Spinner from "./Spinner";

type IssueForm = {
  title: string;
  description: string;
};

export default function CreateIssue({ data }: { data?: Issue }) {
  const editData = data;
  const [isLoading, setLoading] = useState(false);
  const { handleSubmit, register, control } = useForm<IssueForm>({
    defaultValues: {
      title: data?.title,
      description: data?.description,
    },
  });
  const router = useRouter();
  const createIssue = async (data: IssueForm) => {
    const res = await fetch("/api/issues/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const createdData = await res.json();
    return createdData;
  };

  const updateIssue = async (data: IssueForm, id: string) => {
    const res = await fetch(`/api/issues/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const updatedData = await res.json();
    return updatedData;
  };

  const submitHandler: SubmitHandler<IssueForm> = async (data) => {
    if (!data.description?.trim()) return;
    setLoading(true);
    let returnedData;
    if (!editData) {
      returnedData = await createIssue(data);
    }
    if (editData) {
      returnedData = await updateIssue(data, editData.id);
    }
    setLoading(false);
    if (returnedData.status === "success") {
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
            {...register("title", {
              required: "title is required",
              minLength: 5,
            })}
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
          className={`rounded px-4 py-2 bg-[var(--accent-9)] text-[var(--accent-9-contrast)] ${
            isLoading && "opacity-50"
          }`}
        >
          {" "}
          {isLoading
            ? `Loading ... `
            : editData
            ? "Update Issues"
            : "Submit Issues"}
        </button>
      </form>
    </Container>
  );
}
