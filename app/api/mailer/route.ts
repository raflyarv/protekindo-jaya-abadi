import { NextApiRequest } from 'next';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { name, company, email, phone, message } = await req.json();

  console.log(req.body);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: email,
    to: 'raflyarvmedia@gmail.com',
    subject: `[Website] Protekindo Jaya Abadi dari ${name} (${company})`,
    text: `
            Nama: ${name}
            Perusahaan: ${company}
            Email: ${email}
            Nomor Ponsel: ${phone}
            Pesan: ${message}
        `,
  };

  try {
    const data = await transporter.sendMail(mailOptions);
    return Response.json(data);
  } catch (error: any) {
    return Response.json(error);
  }
}
