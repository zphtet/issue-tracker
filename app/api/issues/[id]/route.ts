import prisma from "@/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body = (await request.json()) as { title: string; description: string };
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
  const updatedIssue = await prisma.issue.update({
    where: {
      id: params.id,
    },
    data: {
      title: body.description,
      description: body.description,
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
