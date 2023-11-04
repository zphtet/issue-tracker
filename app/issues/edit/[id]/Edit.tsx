"use client";
import dynamic from "next/dynamic";
import CreateFormLoading from "../../compoments/CreateFormLoading";
import { Issue } from "@prisma/client";
const CreateIssue = dynamic(() => import("../../compoments/IssueForm"), {
  ssr: false,
  loading: () => <CreateFormLoading />,
});
const EditForm = ({ data }: { data: Issue }) => {
  return <CreateIssue data={data} />;
};

export default EditForm;
