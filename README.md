# 📚 Avaliação 3 — Sistema de Gerenciamento de Alunos (Node.js + Express + JWT)

Projeto backend desenvolvido em **Node.js** com **Express** para gerenciar informações de alunos. O sistema possui autenticação via **JWT (JSON Web Token)** e oferece várias rotas para cadastro, consulta e manipulação de dados dos alunos.

---

## 📦 Tecnologias Utilizadas

- Node.js
- Express
- JSON Web Token (JWT)
- body-parser (se necessário)
- uuid (para gerar IDs, se preferir)
- (opcional) dotenv para variáveis de ambiente

---

## 📃 Informações de Alunos

Cada aluno armazenado no sistema possui os seguintes dados:

- `id` : inteiro
- `nome` : string
- `ra` : string
- `nota1` : real
- `nota2` : real

---

## 🔐 Autenticação

O sistema utiliza **autenticação via JWT**. Para acessar as rotas de alunos, é necessário:

1. Criar um usuário via `POST /register`
2. Realizar login via `POST /login` e obter um token
3. Enviar o token no header das requisições autenticadas:

