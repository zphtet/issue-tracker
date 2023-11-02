import prisma from "@/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const reqData = await req.json();
  console.log(reqData);
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
