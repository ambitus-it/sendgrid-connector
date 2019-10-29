const router = require('express').Router();
const servico = require('../controller/index')

router.get('/mail', function (req, res) {
  res.send({ working: true })
});

router.post('/mail/send', function (req, res) {
  try {
    const msg = {
        to,
        from,
        subject,
        text,
        templateId,
        params
    } = req.body;
  
    const retEmail = servico.sendEmail(msg.to, msg.from, msg.subject, msg.text, msg.templateId, msg.params);

    res.status(200).send(retEmail)
  } catch(e) {
    console.log(e)
  }
});

router.post('/email/contacts', async function (req, res) {
  try {
    const  {
       email
    } = req.body;
  
    const id = await servico.addContact(email);
    res.status(200).send(id)
  } catch(e) {
    console.log(e.message)
  }
});

module.exports = router;