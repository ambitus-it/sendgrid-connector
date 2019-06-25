const sgMail = require('@sendgrid/mail');
const getKey = require('../config/key')
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
    }

    sgMail.send(msg);
  } catch(err) {
    console.log(err.message)
  } 
}

module.exports = {
  sendEmail: sendEmail
}