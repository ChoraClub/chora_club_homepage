const nodemailer = require("nodemailer");
import * as handlebars from "handlebars";
import { newslettertemplate } from "./template/newslettertemplate";

export async function sendMail({ to, name, subject, body }) {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  // console.log("SMTP_EMAIL", SMTP_EMAIL);
  // console.log("SMTP_PASSWORD", SMTP_PASSWORD);

  console.log("to", to);
  console.log("name", name);
  // console.log("subject", subject);
  // console.log("body", body);

  const transport = nodemailer.createTransport({
    host: "smtpout.secureserver.net",
    secure: true,
    secureConnection: false,
    tls: {
      ciphers: "SSLv3",
    },
    requireTLS: true,
    port: 465,
    debug: true,
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  try {
    const testResult = await transport.verify();
    console.log("testResult", testResult);
  } catch (error) {
    console.log(error);
    return;
  }

  try {
    const sendResult = await transport.sendMail({
      from: `${name} ${SMTP_EMAIL}`,
      to,
      subject,
      html: body,
      headers: {
        "Newsletter-template": "",
      },
    });

    console.log("sendResult", sendResult);
  } catch (error) {
    console.log(error);
  }
}

export function compileNewsletterTemplate() {
  const template = handlebars.compile(newslettertemplate);
  const htmlBody = template();
  return htmlBody;
}
