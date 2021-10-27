# Cappacita Filmes: O Desafio Final:cinema:
Projeto para a conclusão do curso Cappacita Dev, oferecido pela D1 Smarkio
Neste projeto, tivemos que criar uma interface gráfica que apresentasse pelo menos uma lista de filmes ou séries, com tela de detalhes chamando pelo menos dois serviços do TMDB.
Foi montado o backend em NodeJS e utiliza um banco de dados MySQL

# Features
* Mostra filmes pelo recurso Discover do TMDB
* Mostra uma lista de filmes própria
* Apresenta uma página de detalhes para os filmes da lista
* Possui uma página Sobre que dá detalhes do projeto e tem uma seção de comentários

# Como começar?
* Instale as dependências com o comando ```npm install --save```
* Abra o .env-exemplo para ver o que precisa ser preenchido.
* Crie um arquivo .env com as variáveis necessárias ou mude o nome do .env.exemplo para .env
* Em /src/controller/script.js, a const myPort deve receber a mesma port usada no .env
* Inicie o servidor com o comando ```npm start``` ou ```npm run dev```
* Abra o arquivo index.html que está dentro da pasta src/view ou inicie a extensão Live Server do VS Code em src/view
* Pegue a pipoca:popcorn:
* Perceba que este projeto não faz stream de filmes, mas você quer comer pipoca do mesmo jeito

# Preparando o database
* Você pode conectar seu próprio banco de dados colocando suas variáveis no .env
* Você também pode importar os dados do arquivo meu_db_comment.sql
* Através do MySQL Workbench 8.0, conecte-se com seu usuário e, na aba Administration, selecione Data Import/Restore
* Certifique-se que seu usuário tem as permissões necessárias para criar um schema ou modificá-lo
* Em Data Import, selecione Import from a Self-Contained File e selecione o caminho correto:
```src\model\database\meu_db\meu_db_comment.sql```
* Selecione um Schema para onde importar ou crie um novo
* Não se esqueça de ao final preencher o .env com as informações do banco de dado e usuário