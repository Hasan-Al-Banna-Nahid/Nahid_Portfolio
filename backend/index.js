const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 5000;
app.use(cors());

// Middleware
app.use(express.json());
app.use(express.raw());
app.use(express.text());

// Nodemailer Transporter (Hardcoded Credentials - Not Recommended for Production)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "IamNahid591998@gmail.com", // Your Gmail address
    pass: "ygmi atvv kwss iqjb",
  },
});
app.get("/", (req, res) => {
  res.send("Hi");
});
// API Endpoint to Send Email
app.post("/send-mail", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const mailOptions = {
    from: email,
    to: "IamNahid591998@gmail.com", // Replace with your receiving email
    subject: "New Client Message",
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error sending email", details: error });
  }
});

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
