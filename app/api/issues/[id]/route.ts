import prisma from "@/prisma";
import authOption from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOption);
  if (!session) {
    return NextResponse.json("Unauthorized", { status: 401 });
  }
  const body = (await request.json()) as {
    title: string;
    description: string;
    assignId: string;
  };
  const findOne = await prisma.issue.findUnique({
    where: {
      id: params.id,
    },
  });
  if (!findOne) {
    return NextResponse.json({
      status: "Not Found",
      statusCode: 404,
    });
  }
  if (body.assignId) {
    const data = await prisma.user.findUnique({
      where: {
        id: body.assignId,
      },
    });
    if (!data) return NextResponse.json("Not Found User", { status: 404 });
  }
  const updatedIssue = await prisma.issue.update({
    where: {
      id: params.id,
    },
    data: {
      title: body.title,
      description: body.description,
      assignId: body.assignId,
    },
  });

  return NextResponse.json({
    status: "success",
    data: updatedIssue,
  });
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOption);
  if (!session) {
    return NextResponse.json("Unauthorized", { status: 401 });
  }

  const findOne = await prisma.issue.findUnique({
    where: {
      id: params.id,
    },
  });
  if (!findOne) {
    return NextResponse.json({
      status: "Not Found",
      statusCode: 404,
    });
  }
  await prisma.issue.delete({
    where: { id: params.id },
  });

  return NextResponse.json({
    status: "success",
  });
}
