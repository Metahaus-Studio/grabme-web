const QRCode = require("qrcode");

QRCode.toFile(
  "public/grabme-driver-qr.png",
  "https://grabmeapp.com/drivers",
  {
    width: 1500,
    margin: 2,
  },
  function (err) {
    if (err) throw err;
    console.log("QR Generated Successfully");
  }
);