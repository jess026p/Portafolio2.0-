import { Resend } from 'resend';
import { EmailTemplate } from '@/components/email-template';
import { NextResponse } from 'next/server';

const resend = new Resend('re_C9iqnveQ_hYBNEKADoZDQQ7bzddzJi2hm');

interface FormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}

export async function POST(request: Request) {
    const formData: FormData = await request.json(); // Extraer los datos del formulario del cuerpo de la solicitud
    const { name, email, phone, message } = formData; // Desestructurar los datos del formulario

    try {
        const data = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: [email], // Utilizar el email del formulario
            subject: 'Mensaje de contacto desde mi portafolio', // Asunto del correo
            react: EmailTemplate({ firstName: name }), // Utilizar el nombre del formulario en el template de correo
            text: `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone}\nMensaje: ${message}` // Cuerpo del correo con los datos del formulario
        });
        console.log(data);
        return NextResponse.json({ message: "Email Sent" }, { status: 200 });
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        return NextResponse.json({ message: "Error" }, { status: 500 });
    }
}
