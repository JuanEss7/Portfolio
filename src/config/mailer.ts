import nodemailer from 'nodemailer'
export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: import.meta.env.USER_EMAIL ?? '',
        pass: import.meta.env.PASSWORD ?? '',
    },
})

transporter.verify().then(() => {
    console.log('Listo para enviar correos.')
})