import { Dialog, Button, Flex } from "@radix-ui/themes";
import React from "react";

const ModalBox = ({ handler }: { handler: () => void }) => {
  return (
    <Dialog.Content style={{ maxWidth: 450 }}>
      <Dialog.Title>Delete Issue</Dialog.Title>
      <Dialog.Description size="2" mb="4">
        This action cannot be undone . Make sure you want to delete
      </Dialog.Description>

      <Flex gap="3" mt="4" justify="end">
        <Dialog.Close>
          <Button variant="soft" color="gray">
            Cancel
          </Button>
        </Dialog.Close>
        <Dialog.Close>
          <button
            className=" rounded px-2 bg-[var(--accent-9)] text-[var(--accent-9-contrast)]"
            onClick={handler}
          >
            Delete
          </button>
        </Dialog.Close>
      </Flex>
    </Dialog.Content>
  );
};

export default ModalBox;
