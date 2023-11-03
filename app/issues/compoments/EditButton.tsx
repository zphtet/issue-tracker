"use client";
import { Button } from "@radix-ui/themes";
import { FiEdit } from "react-icons/fi";
const EditButton = () => {
  return (
    <Button>
      <FiEdit />
      Edit Issue
    </Button>
  );
};

export default EditButton;
