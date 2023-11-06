import prisma from "@/prisma";
import { Heading } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import StatusComponent from "@/app/issues/compoments/Status";
import EditButton from "../compoments/EditButton";
import DeleteButton from "../compoments/DeleteButton";
import SelectComponent from "../compoments/Select";
import Markdown from "react-markdown";
import authOption from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { cache } from "react";
type DetailProps = {
  params: { id: string };
};

const fetchIssue = cache((id: string) => {
  return prisma.issue.findUnique({
    where: { id: id },
  });
});

const DetailPage = async ({ params }: DetailProps) => {
  const session = await getServerSession(authOption);

  const data = await fetchIssue(params.id);

  const users = await prisma.user.findMany({});

  if (!data) notFound();
  const { title, status, createdAt, description, id } = data;
  return (
    <div className="flex flex-col md:flex-row gap-10 ">
      <div className="flex-1 space-y-5 ">
        <Heading>{title}</Heading>
        <div className="flex gap-10 ">
          <StatusComponent status={status} />
          <p>{createdAt.toDateString()}</p>
        </div>
        <div className="border p-5 rounded-md prose w-[100%]">
          <Markdown>{description}</Markdown>
        </div>
      </div>
      {session?.user && (
        <div className="basis-[200px]  flex flex-col gap-1">
          <SelectComponent
            users={users}
            issueId={params.id}
            defaultUserId={data.assignId}
          />
          <EditButton id={id} />
          <DeleteButton id={id} />
        </div>
      )}
    </div>
  );
};

export default DetailPage;

export const generateMetadata = async ({ params }: DetailProps) => {
  const data = await fetchIssue(params.id);

  return {
    title: data?.title,
    description: data?.description,
  };
};
