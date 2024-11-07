const express = require('express');
const path = require('path');
const app = express();
const { host, port } = require('./api/config.json');

// Configura o servidor API (importando o arquivo /api/server.js)
const apiServer = require('./api/server.js');

// definir a pasta public para aparecer no navegador
app.use(express.static(path.join(__dirname, 'public')));

// rodar o arquivo de API
apiServer.run(app);

app.listen(port, host, () => {
    console.log(`Servidor rodando em http://${host}:${port}`);
});
