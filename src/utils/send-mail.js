

import nodemailer from "nodemailer";
import { emailTemp } from "./email-temp.js";
import dotenv from "dotenv";
dotenv.config();


// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
    service: "gmail",

    auth: {
        user: "gasryousefsalah@gmail.com",
        pass: process.env.APP_PASSWORD, //from google app password, must enable 2-way verification
    },
    tls: {
        rejectUnauthorized: false
    }
});

// Wrap in an async IIFE so we can use await.
export const sendMail = async (email) => {

    const info = await transporter.sendMail({
        from: '"e-commerce" <gasryousefsalah@gmail.com>',

        to: email,

        subject: "Hello ✔",
        text: "Hello world?",
        html: emailTemp(email),
    });

    console.log("Message sent:", info.messageId);
}
