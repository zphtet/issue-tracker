"use client";
import { Button } from "@radix-ui/themes";
import React from "react";
import { useRouter } from "next/navigation";
const CreateButton = () => {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push("/issues/new")}
      className="cursor-pointer"
    >
      New Issue
    </Button>
  );
};

export default CreateButton;
