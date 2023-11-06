import prisma from "@/prisma";
import { Box, Card, Flex, Grid } from "@radix-ui/themes";
import SummaryCard from "./components/Card";
import Chart from "./components/Chart";
import LatestIssues from "./components/LatestIssues";
export default async function HomePage() {
  const openIssueNumbers = await prisma.issue.count({
    where: {
      status: "OPEN",
    },
  });
  const progressIssueNumbers = await prisma.issue.count({
    where: {
      status: "IN_PROGRESS",
    },
  });
  const closedIssueNumbers = await prisma.issue.count({
    where: {
      status: "CLOSED",
    },
  });
  const data: { name: string; number: number }[] = [
    {
      name: "Open ",
      number: openIssueNumbers,
    },
    {
      name: "In-progress ",
      number: progressIssueNumbers,
    },
    {
      name: "Closed ",
      number: closedIssueNumbers,
    },
  ];
  return (
    <Grid
      columns={{
        initial: "1",
        md: "2",
      }}
      py={"5"}
      gap={"5"}
    >
      <Box className="space-y-5">
        <Flex
          gap={{
            initial: "2",
            md: "5",
          }}
          align={"center"}
        >
          <SummaryCard title="Open Issues" num={openIssueNumbers} />
          <SummaryCard title="In-Progress Issues" num={progressIssueNumbers} />
          <SummaryCard title="Closed Issues" num={closedIssueNumbers} />
        </Flex>
        <Card>
          <Chart data={data} />
        </Card>
      </Box>
      <Box>
        <LatestIssues />
      </Box>
    </Grid>
  );
}
