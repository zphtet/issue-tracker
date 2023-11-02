import { Table } from "@radix-ui/themes";
import React from "react";
import { Badge } from "@radix-ui/themes";
import { Status as StatusPrisma } from "@prisma/client";

const StatusType: Record<
  StatusPrisma,
  { text: string; color: "orange" | "violet" | "green" }
> = {
  OPEN: {
    text: "open",
    color: "orange",
  },
  IN_PROGRESS: {
    text: "in progress",
    color: "violet",
  },
  CLOSED: {
    text: "closed",
    color: "green",
  },
};

const Status = ({ status }: { status: StatusPrisma }) => {
  return (
    <Table.Cell>
      <Badge color={StatusType[status].color}>{StatusType[status].text}</Badge>
    </Table.Cell>
  );
};

export default Status;
