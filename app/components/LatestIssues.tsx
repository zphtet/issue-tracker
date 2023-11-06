import { Box, Card, Heading, Avatar, Flex } from "@radix-ui/themes";
import React from "react";
import StatusComponent from "../issues/compoments/Status";
import Link from "next/link";
import prisma from "@/prisma";
import { Issue, User } from "@prisma/client";

type LatestIssue = Issue & {
  assignUser?: User;
};

const LatestIssues = async () => {
  const LatestData = (await prisma.issue.findMany({
    orderBy: {
      createdAt: "desc",
    },
    skip: 0,
    take: 5,
    include: {
      assignUser: true,
    },
  })) as LatestIssue[];
  return (
    <Card>
      <Heading as="h6">Latest Issues</Heading>
      <Box className=" my-5 [&>*:not(:last-child)]:border-b">
        {LatestData.map((issue) => {
          return (
            <Flex justify={"between"} py={"2"} key={issue.id}>
              <Box>
                <Link href={`/issues/${issue.id}`} className="hover:underline">
                  {issue.title}
                </Link>
                <StatusComponent status={issue.status} />
              </Box>
              {issue.assignUser && (
                <Avatar
                  src={issue.assignUser.image!}
                  fallback="A"
                  radius="full"
                  size={"2"}
                />
              )}
            </Flex>
          );
        })}
      </Box>
    </Card>
  );
};

export default LatestIssues;
