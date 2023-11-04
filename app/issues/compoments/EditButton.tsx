"use client";
import { Button } from "@radix-ui/themes";
import { FiEdit } from "react-icons/fi";
import { useRouter } from "next/navigation";
const EditButton = ({ id }: { id: string }) => {
  const router = useRouter();
  return (
    <Button onClick={() => router.push(`/issues/edit/${id}`)}>
      <FiEdit />
      Edit Issue
    </Button>
  );
};

export default EditButton;
