import prisma from "@/lib/prisma";
import { RollerCoaster } from "lucide-react";
import { NextResponse } from "next/server";

export async function POST(request) {
  const res = await request.json();
  const { name, tel, birthday, registration, email, password, role } = res;
  console.log(res);

  const result = await prisma.user.create({
    data: {
      name,
      tel,
      birthday,
      registration,
      email,
      password,
      role,
    },
  });
  return NextResponse.json({ result });
}
