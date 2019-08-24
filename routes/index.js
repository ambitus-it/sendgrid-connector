const router = require('express').Router();
const servico = require('../controller/index')

router.get('/', function (req, res) {
  res.send({ working: true })
});

router.post('/email', function (req, res) {
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

module.exports = router;