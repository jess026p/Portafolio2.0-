import { Resend } from 'resend';
import { EmailTemplate } from '@/components/email-template';
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

const resend = new Resend('re_RnkhbJBm_GbDuqU4ojsffVzEB1zHFExqT');

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, message } = await req.json();

    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['jesifv1999@gmail.com'],
      subject: `Nuevo mensaje de contacto de ${name}`,
      react: EmailTemplate({ firstName: name, email, phone, message }),
      text: `Nombre: ${name}\nCorreo Electrónico: ${email}\nTeléfono: ${phone}\nMensaje: ${message}`,
    });

    console.log(data);
    return NextResponse.json({ message: "Email Sent" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}
