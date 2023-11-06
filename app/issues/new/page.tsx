"use client";
import dynamic from "next/dynamic";
import CreateFormLoading from "../compoments/CreateFormLoading";
import { Metadata } from "next";
const IssueForm = dynamic(() => import("@/app/issues/compoments/IssueForm"), {
  ssr: false,
  loading: () => <CreateFormLoading />,
});

export default function CreateNewIssuePage() {
  return <IssueForm />;
}

export const metadata: Metadata = {
  title: "Create New Issue",
  description: "create new issue from the following form",
};
