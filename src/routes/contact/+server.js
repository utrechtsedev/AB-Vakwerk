// src/routes/api/contact/+server.js
import { json } from '@sveltejs/kit';
import nodemailer from 'nodemailer';

// Configure nodemailer transporter
// For production, you should use real SMTP credentials
const transporter = nodemailer.createTransport({
  host: 'smtp.example.com', // Replace with your SMTP server
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'your-email@example.com', // Replace with your email
    pass: 'your-password' // Replace with your password or app-specific password
  }
});

// You can alternatively use environment variables for security
// const transporter = nodemailer.createTransport({
//   host: process.env.SMTP_HOST,
//   port: process.env.SMTP_PORT,
//   secure: process.env.SMTP_SECURE === 'true',
//   auth: {
//     user: process.env.SMTP_USER,
//     pass: process.env.SMTP_PASS
//   }
// });

/**
 * Handle POST requests to the /api/contact endpoint
 */
export async function POST({ request }) {
  try {
    // Parse the form data
    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone') || 'Niet opgegeven';
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Basic validation
    if (!name || !email || !subject || !message) {
      return json({ 
        success: false, 
        message: 'Alle verplichte velden moeten worden ingevuld.' 
      }, { status: 400 });
    }
    
    // Format the email subject based on the selected option
    let emailSubject = 'Nieuw contactformulier bericht';
    switch (subject) {
      case 'offerte':
        emailSubject = 'Nieuwe offerte aanvraag';
        break;
      case 'spoed':
        emailSubject = 'SPOED: Nieuwe aanvraag';
        break;
      case 'informatie':
        emailSubject = 'Informatie aanvraag';
        break;
      case 'klacht':
        emailSubject = 'Nieuwe klacht';
        break;
      default:
        emailSubject = `Nieuw bericht: ${subject}`;
    }
    
    // Email content
    const mailOptions = {
      from: '"AB Vakwerk Website" <noreply@ab-vakwerk.nl>',
      to: 'contact@ab-vakwerk.nl', // Replace with recipient email address
      replyTo: email,
      subject: emailSubject,
      text: `
        Nieuw bericht via het contactformulier
        
        Naam: ${name}
        E-mail: ${email}
        Telefoonnummer: ${phone}
        Onderwerp: ${subject}
        
        Bericht:
        ${message}
        
        Verzonden op: ${new Date().toLocaleString('nl-NL')}
      `,
      html: `
        <h2>Nieuw bericht via het contactformulier</h2>
        
        <p><strong>Naam:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefoonnummer:</strong> ${phone}</p>
        <p><strong>Onderwerp:</strong> ${subject}</p>
        
        <h3>Bericht:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
        
        <p><em>Verzonden op: ${new Date().toLocaleString('nl-NL')}</em></p>
      `
    };
    
    // Send email
    await transporter.sendMail(mailOptions);
    
    // Optional: Send confirmation email to the user
    const confirmationMailOptions = {
      from: '"AB Vakwerk" <noreply@ab-vakwerk.nl>',
      to: email,
      subject: 'Bedankt voor uw bericht - AB Vakwerk',
      text: `
        Beste ${name},
        
        Bedankt voor uw bericht. We hebben uw aanvraag ontvangen en zullen zo spoedig mogelijk contact met u opnemen.
        
        Voor spoedgevallen kunt u ons altijd bereiken op: +31 6 1234 5678
        
        Met vriendelijke groet,
        Het team van AB Vakwerk
      `,
      html: `
        <h2>Beste ${name},</h2>
        
        <p>Bedankt voor uw bericht. We hebben uw aanvraag ontvangen en zullen zo spoedig mogelijk contact met u opnemen.</p>
        
        <p>Voor spoedgevallen kunt u ons altijd bereiken op: <a href="tel:+31612345678">+31 6 1234 5678</a></p>
        
        <p>Met vriendelijke groet,<br>
        Het team van AB Vakwerk</p>
        
        <hr>
        <p style="font-size: 12px; color: #666;">
          AB Vakwerk<br>
          Voorbeeldstraat 123<br>
          1234 AB Utrecht<br>
          <a href="https://www.ab-vakwerk.nl">www.ab-vakwerk.nl</a>
        </p>
      `
    };
    
    // Send confirmation email
    await transporter.sendMail(confirmationMailOptions);
    
    // Return success response
    return json({ 
      success: true, 
      message: 'Uw bericht is succesvol verzonden!' 
    });
    
  } catch (error) {
    console.error('Error sending email:', error);
    
    // Return error response
    return json({ 
      success: false, 
      message: 'Er is een fout opgetreden bij het verzenden van het bericht.' 
    }, { status: 500 });
  }
}
