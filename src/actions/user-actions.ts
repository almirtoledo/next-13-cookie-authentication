"use server";

import { User } from "@/models/user";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { randomUUID } from "crypto";
import { cookies } from "next/headers";

const prisma = new PrismaClient();

export async function createUser(input: Partial<User>): Promise<boolean> {
  try {
    input.id = randomUUID();
    if (input.password) {
      input.password = await bcrypt.hash(input.password, 12);
    }
    await prisma.user.create({ data: input as User });
    return true;
  } catch (error) {
    return false;
  }
}

export async function login(email: string, password: string): Promise<boolean> {
  try {
    const user = await prisma.user.findMany({ where: { email } });
    console.log(user);
    if (user.length === 0) {
      throw new Error("");
    }

    const { id: userId, name: userName, password: userPassword } = user[0];
    const passwordCompare = await bcrypt.compare(password, userPassword);

    if (!passwordCompare) {
      throw new Error("");
    }

    cookies().set({
      name: "session",
      value: JSON.stringify({ userId, userName }),
    });

    return true;
  } catch (error) {
    return false;
  }
}
