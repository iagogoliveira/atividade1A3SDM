# Configuração para rodar
1. Instale o Restify, knex, mysql
```javascript
npm install restify
npm install knex
npm install mysql
```
2. Instale o MySQL e crie o banco de dados:

```sql
CREATE DATABASE loja;
```

3. Crie as tabelas de cliente e produto:

```sql
CREATE TABLE produto (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100),
  preco DECIMAL(10,2)
);

CREATE TABLE cliente (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100),
  email VARCHAR(100)
);
```
# Configuração para rodar
Rodar o projeto com o seguinte comando
```javascript
node app.js
```




