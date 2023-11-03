"use client";
import { Button } from "@radix-ui/themes";
import { AiFillDelete } from "react-icons/ai";

const DeleteButton = () => {
  return (
    <Button color="red">
      <AiFillDelete />
      Delete
    </Button>
  );
};

export default DeleteButton;
