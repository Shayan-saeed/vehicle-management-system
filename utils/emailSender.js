const nodemailer = require('nodemailer');

async function sendEmail(receiverEmail, pdfBuffer) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your.email@gmail.com',
            pass: 'your-email-password'
        }
    });

    const mailOptions = {
        from: 'your.email@gmail.com',
        to: receiverEmail,
        subject: 'Vehicle Details PDF',
        text: 'Attached is the PDF with your vehicle details.',
        attachments: [
            {
                filename: 'vehicle_details.pdf',
                content: pdfBuffer,
                encoding: 'base64'
            }
        ]
    };

    return transporter.sendMail(mailOptions);
}

module.exports = {
    sendEmail
};
