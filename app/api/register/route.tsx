import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from "bcrypt";

const registerSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6)
})

export async function POST(request: NextRequest) {
    const body = await request.json();

    const validation = registerSchema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json({error: validation.error}, { status: 400 });
    }
    const user = await prisma.user.findUnique({ where: {email: body.email} });
    if (user) {
        return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(body.password, 10);

    const newUser = await prisma.user.create({
        data: {
            email: body.email,
            name: body.name,
            hashedPassword: hashedPassword
        }
    });

    return NextResponse.json({ message: "User created successfully", email: newUser.email}, { status: 201 });

}