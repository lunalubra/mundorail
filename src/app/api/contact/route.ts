import { NextResponse } from "next/server";
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

  console.log("data!!!!!!!!!!", data);

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
            <p>País: ${data.country} </p>
            ${data.route ? `<p>Ruta: ${data.route} </p>` : ""}
            ${data.start_date ? `<p>Fecha de inicio: ${data.start_date} </p>` : ""}
            ${data.amount?.senior ? `<p>Seniors: ${data.amount.senior} </p>` : ""}
            ${data.amount?.adult ? `<p>Adultos: ${data.amount.adult} </p>` : ""}
            ${
              Object.values(data.kids ?? {})?.length
                ? `<p>Jovenes:
                ${(Object.values(data.kids ?? {}) as number[]).map((kid: number) => `<span> Edad: ${kid}</span>`)}
             </p>`
                : ""
            }
            `
    });

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "error" });
  }
}
