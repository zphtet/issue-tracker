"use client";
import dynamic from "next/dynamic";
import CreateFormLoading from "../compoments/CreateFormLoading";

const IssueForm = dynamic(() => import("@/app/issues/compoments/IssueForm"), {
  ssr: false,
  loading: () => <CreateFormLoading />,
});

export default function CreateNewIssuePage() {
  return <IssueForm />;
}
