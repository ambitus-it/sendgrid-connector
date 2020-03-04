const router = require('express').Router();
const servico = require('../controller/index')

router.get('/mail', function (req, res) {
  res.send({ working: true })
});

router.post('/mail/send', function (req, res) {
  try {
    const {
      body
    } = req;

    const retEmail = servico.sendEmail(body);

    res.status(200).send(retEmail)
  } catch (e) {
    console.log(e)
  }
});

router.post('/mail/contacts', async function (req, res) {
  try {
    const {
      email
    } = req.body;

    const id = await servico.addContact(email);
    res.status(200).send(id)
  } catch (e) {
    console.log(e.message)
  }
});

module.exports = router;