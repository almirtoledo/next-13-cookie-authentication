"use server";

import { User } from "@/models/user";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { randomUUID } from "crypto";
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
