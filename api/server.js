const path = require('path');
const fs = require('fs');

module.exports = {
    run: (app) => {
        const countFile = path.join(__dirname, 'counter.txt'); // arquivo de contagem

        // Função para ler o contador atual
        const getCounter = () => {
            try {
                if (fs.existsSync(countFile)) {
                    const data = fs.readFileSync(countFile, 'utf8');
                    return parseInt(data, 10) || 0;
                }
                fs.writeFileSync(countFile, '0', 'utf8'); // cria um arquivo novo com valor 0 caso não exista
                return 0;
            } catch (err) {
                console.error('Erro ao ler o contador:', err);
                return 0;
            }
        };

        // Função para incrementar o contador
        const incrementCounter = () => {
            let currentCount = getCounter();
            currentCount += 1;
            try {
                fs.writeFileSync(countFile, currentCount.toString(), 'utf8');
            } catch (err) {
                console.error('Erro ao salvar o contador:', err);
            }
        };

        // Endpoint para incrementar o contador e redirecionar para o index.html
        app.get('/new', (req, res) => {
            incrementCounter();
            res.redirect('/'); // Redireciona para o index.html
        });

        // Endpoint para retornar o contador de acessos em formato JSON
        app.get('/contador', (req, res) => {
            const count = getCounter();
            res.json({ count });
        });

        // redirecionar para a página principal caso o usuário acesse um endpoint que não existe
        app.use((req, res, next) => {
            res.redirect('/');
        });
    }
};
