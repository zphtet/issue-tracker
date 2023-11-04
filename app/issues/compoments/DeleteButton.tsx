"use client";
import { Button, Dialog } from "@radix-ui/themes";
import { AiFillDelete } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Spinner from "./Spinner";
import ModalBox from "./ModalBox";
const DeleteButton = ({ id }: { id: string }) => {
  const [isDeleting, setDeleting] = useState(false);
  const router = useRouter();
  const deleteHandler = async () => {
    setDeleting(true);
    const returnedData = await fetch(`/api/issues/${id}`, {
      method: "DELETE",
    });
    setDeleting(false);
    console.log(returnedData);
    router.push("/issues");
    router.refresh();
  };
  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger>
          <Button
            color="red"
            disabled={isDeleting}
            // onClick={() => setModalOpen(true)}
          >
            <AiFillDelete />
            {isDeleting ? <Spinner /> : "Delete"}
          </Button>
        </Dialog.Trigger>
        <ModalBox handler={deleteHandler} />
      </Dialog.Root>
    </>
  );
};

export default DeleteButton;
