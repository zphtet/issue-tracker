import React from "react";
import EditForm from "./Edit";
import prisma from "@/prisma";
import { notFound } from "next/navigation";

const fetchIssue = (id: string) => {
  return prisma.issue.findUnique({
    where: { id: id },
  });
};

const EditPage = async ({ params }: { params: { id: string } }) => {
  const data = await fetchIssue(params.id);
  if (!data) notFound();
  return (
    <div>
      <EditForm data={data} />
    </div>
  );
};

export default EditPage;

export const generateMetadata = async ({
  params,
}: {
  params: { id: string };
}) => {
  const data = await fetchIssue(params.id);
  return {
    title: `editing - ${data?.title}`,
    description: data?.description,
  };
};
