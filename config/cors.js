module.exports = {
  corsFilter: (req, res, next) => {
    const origin = req.headers.origin || '*'
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Credentials', 'true');
    if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'POST, GET, DELETE, PUT, OPTIONS');
      res.header('Access-Control-Allow-Headers', 'Authorization, Origin, Content-Type, Accept, X-Access-Token');
      res.header('Access-Control-Max-Age', '3600');
      res.sendStatus(200)
    } else {
      next();
    }
  },
}