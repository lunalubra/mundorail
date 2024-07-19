import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");

// Handles POST requests to /api

export async function POST(request: Request) {
  const username = process.env.EMAIL_USERNAME;
  const password = process.env.EMAIL_PASSWORD;
  const myEmail = process.env.PERSONAL_EMAIL;

  const data = await request.json();

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: username,
      pass: password
    }
  });

  try {
    await transporter.sendMail({
      from: username,
      to: myEmail,
      replyTo: data.email,
      subject: `${data.email} esta interesado`,
      html: `
            <p>Nombre: ${data.name} </p>
            <p>Apellido: ${data.surname} </p>
            <p>Email: ${data.email} </p>
            <p>Teléfono: ${data.number} </p>
            <p>Empresa: ${data.company} </p>
            <p>Mensaje: ${data.message} </p>
            `
    });

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    return NextResponse.json({ message: "error" });
  }
}
