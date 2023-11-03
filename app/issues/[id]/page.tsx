import prisma from "@/prisma";
import { Heading } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import StatusComponent from "@/app/issues/compoments/Status";
import EditButton from "../compoments/EditButton";
import DeleteButton from "../compoments/DeleteButton";
import SelectComponent from "../compoments/Select";
import Markdown from "react-markdown";

type DetailProps = {
  params: { id: string };
};

const DetailPage = async ({ params }: DetailProps) => {
  const data = await prisma.issue.findUnique({
    where: { id: params.id },
  });
  console.log(data);
  if (!data) notFound();
  const { title, status, createdAt, description } = data;
  return (
    <div className="flex gap-10 ">
      <div className="flex-1 space-y-5">
        <Heading>{title}</Heading>
        <div className="flex gap-10 ">
          <StatusComponent status={status} />
          <p>{createdAt.toDateString()}</p>
        </div>
        <div className="border p-5 rounded-md prose">
          <Markdown>{description}</Markdown>
        </div>
      </div>
      <div className="basis-[200px]  flex flex-col gap-1">
        <SelectComponent />
        <EditButton />
        <DeleteButton />
      </div>
    </div>
  );
};

export default DetailPage;
