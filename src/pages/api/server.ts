import type { APIRoute } from 'astro';
import { transporter } from '../../config/mailer';
export const POST: APIRoute = async ({ request }): Promise<Response> => {
    const { nombre, asunto, mensaje, email } = await request.json();
    try {
        const info = await transporter.sendMail({
            from: `"${nombre}" <juanesteban.sanchez56@gmail.com>`, // sender address
            to: "juanesteban.sanchez56@gmail.com", // list of receivers
            subject: `${asunto}`, // Subject line
            text: `${mensaje}`, // plain text body
            // html: "<b>Hello world?</b>", // html body
        });
        return new Response(JSON.stringify('Enviado correctamente'))
    } catch (error) {
        console.log(error)
        return new Response(JSON.stringify('Ocurrio un erro al enviar el email.'), { status: 500 })
    }
}