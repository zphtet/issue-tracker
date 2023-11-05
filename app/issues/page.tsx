import { Table } from "@radix-ui/themes";
import CreateButton from "./compoments/CreateButton";
import TableCell from "./compoments/TableCell";
import StatusCompoment from "./compoments/Status";
import prisma from "@/prisma";
import { Issue } from "@prisma/client";
import Filter from "./compoments/Filter";
export default async function IssuePage({
  searchParams,
}: {
  searchParams?: { filter?: string | undefined };
}) {
  const { filter } = searchParams!;
  const byStatus =
    filter === "open"
      ? "OPEN"
      : filter === "inprogress"
      ? "IN_PROGRESS"
      : filter === "closed"
      ? "CLOSED"
      : undefined;
  const data = (await prisma.issue.findMany({
    where: {
      status: byStatus,
    },
  })) as Issue[];

  return (
    <div>
      <p>Issue Page</p>
      <div className=" flex items-center justify-between my-5">
        <Filter />
        <CreateButton />
      </div>
      <div>
        <Table.Root variant="surface">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Issues</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>CreatedAt</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {data.map((issue) => {
              return (
                <Table.Row key={issue.id}>
                  <TableCell id={issue.id} title={issue.title} />
                  <StatusCompoment status={issue.status} />
                  <Table.Cell>{issue.createdAt.toDateString()}</Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table.Root>
      </div>
    </div>
  );
}

export const revalidate = 0;
