const nodemailer = require("nodemailer");

export default function (req, res) {
  console.log(req.body);
  const PORT = process.env.NEXT_PUBLIC_PORT;
  const HOST = process.env.NEXT_PUBLIC_HOST;
  const USER = process.env.NEXT_PUBLIC_USER;
  const PASSWORD = process.env.NEXT_PUBLIC_PASSWORD;

  const transporter = nodemailer.createTransport({
    port: PORT,
    host: HOST,
    auth: {
      user: USER,
      pass: PASSWORD,
    },
    secure: false, // tls requires this set to false
    tls: true,
  });
  const mailData = {
    from: USER,
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
