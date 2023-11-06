import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create New Issue",
  description: "create issues and assign",
};

export default function CreateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
