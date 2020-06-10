const sgMail = require("@sendgrid/mail");
const getKey = require("../config/key");
const http = require("https");
const axios = require("axios");
sgMail.setApiKey(getKey.key());

sendEmail = async ({
  to,
  cc,
  bcc,
  from,
  subject,
  text,
  html,
  templateId,
  params
}) => {
  try {
    const msg = {
      to,
      cc,
      bcc,
      from,
      subject,
      text,
      html,
      templateId,
      dynamic_template_data: params
    };

    const result = await sgMail.send(msg);

    console.log(result)

    return result
  } catch (err) {
    console.log(err.message);
  }
};

addContact = email => {
  try {
    const options = {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${getKey.key()}`,
        "Content-Type": "application/json"
      },
      data: { contacts: [{ email }] }
    };
    return axios("https://api.sendgrid.com/v3/marketing/contacts", options)
      .then(res => res.data)
      .catch(err => {
        throw new Error(err.message);
      });
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = {
  sendEmail,
  addContact
};
