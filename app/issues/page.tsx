import { Table } from "@radix-ui/themes";
import CreateButton from "./compoments/CreateButton";
import TableCell from "./compoments/TableCell";
import StatusCompoment from "./compoments/Status";
import prisma from "@/prisma";
import { Issue } from "@prisma/client";
import Filter from "./compoments/Filter";
import Pagination from "./compoments/Pagination";
import { NUM_OF_ISSUES_PER_PAGE } from "@/utils/constants";
export default async function IssuePage({
  searchParams,
}: {
  searchParams?: { filter?: string | undefined; page?: string | undefined };
}) {
  const { filter, page } = searchParams!;
  const pageValue = Number(page) || 1;
  const byStatus =
    filter === "open"
      ? "OPEN"
      : filter === "inprogress"
      ? "IN_PROGRESS"
      : filter === "closed"
      ? "CLOSED"
      : undefined;
  const data = (await prisma.issue.findMany({
    skip: (pageValue - 1) * NUM_OF_ISSUES_PER_PAGE,
    take: NUM_OF_ISSUES_PER_PAGE,
    where: {
      status: byStatus,
    },
  })) as Issue[];
  const totalCount = await prisma.issue.count({
    where: {
      status: byStatus,
    },
  });

  return (
    <div className=" w-full">
      <div className=" flex items-center justify-between mb-5">
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
      <Pagination total={totalCount} />
    </div>
  );
}

export const revalidate = 0;
