const app = require('./config/custom-express')();
const fs = require('fs');
const privateKey = fs.readFileSync('/etc/letsencrypt/live/api2.singularegestao.com.br/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/api2.singularegestao.com.br/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/api2.singularegestao.com.br/chain.pem', 'utf8');

const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};

const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

httpServer.listen(80, () => {
	console.log('HTTP Server running on port 80');
});

httpsServer.listen(443, () => {
	console.log('HTTPS Server running on port 443');
});