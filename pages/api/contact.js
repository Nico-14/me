import nodemailer from 'nodemailer';
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: { user: process.env.GMAIL_EMAIL, pass: process.env.GMAIL_PASS },
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { subject, email, text } = req.body;
    if (subject && email && text) {
      try {
        await mailTransport.sendMail({
          subject: `[Web Personal] Mail de: ${email} Asunto: ${subject}`,
          from: process.env.GMAIL_EMAIL,
          to: process.env.GMAIL_TO,
          text: `De: ${email}, Asunto: ${subject}\nTexto: ${text}`,
        });
        res.status(200).send('OK');
      } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
      }
    } else res.status(400).send('Bad request');
  } else {
    res.status(404).send('Not found');
  }
}
