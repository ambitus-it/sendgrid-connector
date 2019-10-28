const sgMail = require("@sendgrid/mail");
const getKey = require("../config/key");
const http = require("https");
sgMail.setApiKey(getKey.key());

sendEmail = (to, from, subject, text, templateId, params) => {
  try {
    const msg = {
      to: to,
      from: from,
      subject: subject,
      text: text,
      templateId: templateId,
      dynamic_template_data: params
    };

    sgMail.send(msg);
  } catch (err) {
    console.log(err.message);
  }
};

addContact = email => {
  try {
    const options = {
      method: "PUT",
      hostname: "api.sendgrid.com",
      port: null,
      path: "/v3/marketing/contacts",
      headers: {
        authorization: `Bearer ${getKey.key()}`
      }
    };

    const req = http.request(options, function(res) {
      const chunks = [];

      res.on("data", function(chunk) {
        chunks.push(chunk);
      });

      res.on("end", function() {
        const body = Buffer.concat(chunks);
        return body.toString();
      });
    });

    req.write(`{"contacts":[{"email":"${email}"}]}`);
    req.end();
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = {
  sendEmail,
  addContact
};
