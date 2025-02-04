# Kanban Backend

API RESTful para gerenciamento de tarefas em um sistema Kanban. Desenvolvida com **Node.js**, **Express**, **MongoDB Atlas** e **TypeScript**. Permite a criação, leitura, atualização e exclusão de tarefas com diferentes status: **Todo**, **In-Progress** e **Done**. A aplicação foi projetada para ser escalável e fácil de manter, fornecendo uma API simples e poderosa para manipulação de dados de tarefas.

## Funcionalidades

A API possui as seguintes funcionalidades:

- **Criar tarefa**: Adiciona uma nova tarefa ao sistema com informações como título, descrição e status.
- **Listar tarefas**: Recupera todas as tarefas armazenadas no banco de dados.
- **Atualizar tarefa**: Modifica as informações de uma tarefa existente, incluindo seu status.
- **Deletar tarefa**: Remove uma tarefa do sistema.

### Endpoints

- **POST /api/tasks**: Criar uma nova tarefa.
- **GET /api/tasks**: Listar todas as tarefas.
- **PUT /api/tasks/:id**: Atualizar uma tarefa existente.
- **DELETE /api/tasks/:id**: Deletar uma tarefa.

## Tecnologias

- **Node.js**: Ambiente de execução JavaScript para o backend.
- **Express**: Framework minimalista e flexível para criação de APIs.
- **MongoDB Atlas**: Banco de dados NoSQL, utilizado para persistir as informações das tarefas.
- **TypeScript**: Superset de JavaScript, utilizado para maior robustez e segurança no desenvolvimento.
- **Nodemon**: Ferramenta para recarregar automaticamente o servidor durante o desenvolvimento.

## Como rodar o projeto

### 1. Clonar o repositório

Primeiro, clone o repositório para sua máquina local:

```bash
git clone https://github.com/SEU-USERNAME/kanban-backend.git
cd kanban-backend
```

### 2. Instalar as dependências

Instale todas as dependências necessárias usando o npm:

```bash
npm install
```

### 3. Configurar as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com a seguinte configuração:

```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

- **MONGODB_URI**: A URL de conexão do seu banco de dados MongoDB Atlas. Você pode obter essa URL ao criar um cluster no MongoDB Atlas.
- **PORT**: A porta onde o servidor será executado (padrão: 5000).

### 4. Rodar o servidor

Durante o desenvolvimento, você pode usar o **Nodemon** para iniciar o servidor e acompanhar mudanças no código automaticamente:

```bash
npm run dev
```

O servidor estará disponível em [http://localhost:5000](http://localhost:5000).

### 5. Rodar os testes

Caso queira rodar testes (se implementados), use o seguinte comando:

```bash
npm test
```

## Exemplos de uso com `curl`

Você pode testar a API usando `curl` ou ferramentas como **Postman** ou **Insomnia**.

### Criar uma tarefa

```bash
curl -X POST http://localhost:5000/api/tasks -H "Content-Type: application/json" -d '{"title":"Nova Tarefa","description":"Descrição da tarefa","status":"todo"}'
```

### Listar tarefas

```bash
curl http://localhost:5000/api/tasks
```

### Atualizar uma tarefa

```bash
curl -X PUT http://localhost:5000/api/tasks/{id} -H "Content-Type: application/json" -d '{"status":"done"}'
```

### Deletar uma tarefa

```bash
curl -X DELETE http://localhost:5000/api/tasks/{id}
```

## Contribuição

Contribuições são bem-vindas! Para contribuir com o projeto, siga os passos abaixo:

1. Faça o fork do repositório.
2. Crie uma branch para sua feature ou correção: `git checkout -b minha-feature`.
3. Faça suas modificações e adicione testes, se necessário.
4. Faça commit das suas mudanças: `git commit -m 'Adicionando nova feature'`.
5. Envie para o seu fork: `git push origin minha-feature`.
6. Crie um pull request para o repositório original.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
