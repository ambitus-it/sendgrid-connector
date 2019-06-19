let router = require('express').Router();
let servico = require('../controller/index')
const bodyParser = require('body-parser');

router.post('/email', bodyParser.json(), function (req, res) {
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
});

module.exports = router;