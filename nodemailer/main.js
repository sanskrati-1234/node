import "dotenv/config";
import { google } from "googleapis";
import nodemailer from "nodemailer";
import { config } from "./config.js";

// Initialize OAuth2Client with your credentials
const oAuth2Client = new google.auth.OAuth2(
  config.clientId,
  config.clientSecret
);

// Set the refresh token obtained during the authorization process
oAuth2Client.setCredentials({
  refresh_token: config.refreshToken,
});

// Create a transporter with OAuth2
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: config.senderEmail,
    clientId: config.clientId,
    clientSecret: config.clientSecret,
    refreshToken: config.refreshToken,
    accessToken: oAuth2Client.getAccessToken(),
  },
});

// Send mail function
const sendMail = async (mailOptions) => {
  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

// Example usage
const mailOptions = {
  from: `Sanskrati Team <${config.senderEmail}>`,
  to: config.senderEmail,
  bcc: "sanskratiagrawal306@gmail.com,arjunsr410@gmail.com",
  subject: "Welcome Email",
  text: "This is a test email sent using Node.js and Gmail API.",
};

sendMail(mailOptions);
