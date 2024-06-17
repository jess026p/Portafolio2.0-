import { Resend } from 'resend';
import { EmailTemplate } from '@/components/email-template';
import { NextResponse } from 'next/server';

const resend = new Resend('re_RnkhbJBm_GbDuqU4ojsffVzEB1zHFExqT')
 export async function POST() {
  try {
    const data = resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['jesifv1999@gmail.com'],
        subject: 'Probando resend desde mi portafolio ',
        react: EmailTemplate({ firstName: 'Jesi09:14' }),
        text:'Holaaaaaaaaaaaaaaa'

    })
    console.log(data)
    return NextResponse.json({message:"Email Sent"},{
        status:200
    })
  } catch (error) {
    return NextResponse.json({message:"Error"},{status:500})
  }
}