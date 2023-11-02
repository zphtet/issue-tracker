"use client";
import { Table } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const TableCell = ({ title, id }: { title: string; id: number | string }) => {
  return (
    <Table.RowHeaderCell className="hover:underline">
      <Link href={`/issues/${id}`}>{title}</Link>
    </Table.RowHeaderCell>
  );
};

export default TableCell;
