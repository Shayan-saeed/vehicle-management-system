const PDFDocument = require('pdfkit');

async function generatePDF(vehicle) {
    return new Promise((resolve, reject) => {
        const doc = new PDFDocument();
        // Customize PDF content based on the vehicle object
        doc.text(`Vehicle Details:\n\n${JSON.stringify(vehicle, null, 2)}`);
        const buffers = [];
        doc.on('data', buffers.push.bind(buffers));
        doc.on('end', () => {
            const pdfBuffer = Buffer.concat(buffers);
            resolve(pdfBuffer);
        });
        doc.end();
    });
}

module.exports = {
    generatePDF
};
