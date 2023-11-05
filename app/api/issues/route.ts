import prisma from "@/prisma";
import authOption from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await getServerSession(authOption);
  if (!session) {
    return NextResponse.json("Unauthorized", { status: 401 });
  }
  const reqData = await req.json();
  const res = await prisma.issue.create({
    data: {
      title: reqData.title,
      description: reqData.description,
    },
  });
  return NextResponse.json({
    status: "success",
    data: res,
  });
}
