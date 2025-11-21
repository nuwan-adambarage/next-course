import { Resend } from "resend";
import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_EMAIL_API_KEY);

export async function POST() {
    await resend.emails.send({
        from: "nuwansda@gmail.com",
        to: "nuwansda@gmail.com",
        subject: "Welcome to our service!",
        react: <WelcomeTemplate name="User" />
    });

    return NextResponse.json({});
}
