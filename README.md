# Sistema de Contagem de Acesso ao Site

Adicionei um sistema de contagem de acesso ao site.

## Mudanças na infraestrutura do site:

- Digite o comando `npm install express path fs` para instalar as dependências.
- Com as dependências instaladas, digite o comando `node index.js` para iniciar o servidor e acesse o site em [http://localhost:3000/](http://localhost:3000/).
- Eu criei uma pasta chamada `/api` para a API e `/public` para os arquivos que vão ficar públicos (arquivos HTML, CSS, etc).

## Como funciona o sistema de contagem de acesso:

- O QR code vai direcionar o usuário para o endpoint `/new`.
- O endpoint `/new` vai contar +1 acesso e direcionar para o `/`, que é a página inicial (`index.html`).
- Para ver quantos acessos o site tem, acesse o endpoint `/acessos.html`.
- Também adicionei um sistema para que, caso o usuário tente acessar um endpoint que não existe, ele seja direcionado para a página padrão (`index.html`).

By Enzo, N11