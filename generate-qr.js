async function generateQR() {
  const { default: QRCode } = await import("qrcode");
  const { default: sharp } = await import("sharp");
const qrBuffer = await QRCode.toBuffer("https://grabmeapp.com/drivers#driver-application", {
        width: 1500,
    margin: 2,
    errorCorrectionLevel: "H",
    color: {
      dark: "#000000",
      light: "#FFFFFF",
    },
  });

  const logoBuffer = await sharp("public/grabme-logo.png")
    .resize(260, 260, {
      fit: "contain",
      background: "#000000",
    })
    .extend({
      top: 35,
      bottom: 35,
      left: 35,
      right: 35,
      background: "#000000",
    })
    .png()
    .toBuffer();

  await sharp(qrBuffer)
    .composite([
      {
        input: logoBuffer,
        gravity: "center",
      },
    ])
    .png()
    .toFile("public/grabme-driver-qr-branded.png");

  console.log("Branded QR created: public/grabme-driver-qr-branded.png");
}

generateQR();