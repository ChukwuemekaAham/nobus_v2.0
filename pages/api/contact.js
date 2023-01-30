const nodemailer = require("nodemailer");

export default function (req, res) {
  require("dotenv").config();
  const transporter = nodemailer.createTransport({
    port: process.env.PORT,
    host: process.env.HOST,
    auth: {
      user: process.env.USER,
      pass: process.env.PASSWORD,
    },
    secure: false, // tls requires this set to false
    tls: true,
  });
  const mailData = {
    from: process.env.USER,
    to: "support@nobus.io",
    subject: `Message from ${req.body.name}: ${req.body.subject}`,
    text: req.body.message,
    html: `<div><p>${req.body.message}</p> </div><p>Sent from:
    ${req.body.email}</p> `,
  };
  if (req.method === "POST") {
    transporter.sendMail(mailData, (err, info) => {
      if (err) {
        res.status(404).json({
          error: `Connection refused at ${err.address}`,
        });
      } else {
        res.status(250).json({
          success: `Message delivered to ${info.accepted}`,
        });
      }
    });
  }
}

// export default function (req, res) {
//   const transporter = nodemailer.createTransport({
//     port: 465,
//     host: "smtp.gmail.com",
//     auth: {
//       user: "ahamchukwuemeka2@gmail.com",
//       pass: "",
//     },
//     secure: true,
//   });
//   const mailData = {
//     from: req.body.email,
//     // support@nobus.io
//     to: "ahamchukwuemeka2@gmail.com",
//     subject: `Message from ${req.body.name}: ${req.body.subject}`,
//     text: req.body.message,
//     html: `<div><p>${req.body.message}</p></div>`,
//   };
//   transporter.sendMail(mailData, function (err, info) {
//     if (err) console.log(err);
//     else console.log(info);
//   });
//   res.status(200);
// }
