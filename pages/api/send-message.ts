import nodemailer from 'nodemailer';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, vin, email, subject, phone, message } = req.body;

    // Create a transporter using SMTP configuration (e.g., Gmail or SendGrid)
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or another SMTP service
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password
      },
    });

    // Email content
    const mailOptions = {
      from: email, // sender address
      to: [
        'hunainzahidalikhan@gmail.com',
        'hm7122653@gmail.com',
        'jawad22malik44@gmail.com',
        'orders.cfgraphics@gmail.com',
        'amoiz78612@gmail.com'
      ].join(', '), // receiver addresses
      subject: subject, // subject line
      text: `Name: ${name}\nVIN: ${vin}\nEmail: ${email}\nPhone: ${phone}\n\nMessage: ${message}`, // plain text body
    };

    try {
      // Send email
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
      return res.status(500).json({ message: 'Failed to send message', error });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
