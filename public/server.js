// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/order", (req, res) => {
  const { name, email, phone, address, quantity, amount } = req.body;

  console.log("Order Received:");
  console.log(`Name: ${name}, Email: ${email}, Phone: ${phone}`);
  console.log(`Quantity: ${quantity}, Amount: ₹${amount}`);
  console.log(`Address: ${address}`);

  // Simulate successful notification (e.g., SMS or email)
  // You can use Twilio (SMS) or Nodemailer (email) here
  res.json({ success: true });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
