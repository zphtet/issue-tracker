import React from "react";
import EditForm from "./Edit";
import prisma from "@/prisma";
import { notFound } from "next/navigation";
const EditPage = async ({ params }: { params: { id: string } }) => {
  const data = await prisma.issue.findUnique({
    where: { id: params.id },
  });
  if (!data) notFound();
  return (
    <div>
      <EditForm data={data} />
    </div>
  );
};

export default EditPage;
