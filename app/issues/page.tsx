import { Table } from "@radix-ui/themes";
import CreateButton from "./CreateButton";
import TableCell from "./TableCell";
import StatusCompoment from "./Status";
import prisma from "@/prisma";
import { Issue } from "@prisma/client";
export default async function IssuePage() {
  const data = (await prisma.issue.findMany({})) as Issue[];
  // console.log(data);
  return (
    <div>
      <p>Issue Page</p>
      <div>
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
