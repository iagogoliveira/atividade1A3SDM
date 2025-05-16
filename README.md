# Pesquisa sobre padrões de projeto para API REST com Node.js

Durante a pesquisa sobre padrões de projeto para desenvolvimento de APIs REST usando Node.js, foi possível identificar que a arquitetura em camadas é uma prática eficiente. Ela organiza o sistema dividindo responsabilidades entre diferentes partes, facilitando o desenvolvimento, manutenção e escalabilidade.

Os padrões mais utilizados incluem:

- **Separação em camadas (Layered Architecture)**: divide o sistema em camadas como Rotas, Controller, Service e Repository.
- **Repository Pattern**: isola a lógica de acesso aos dados para que o resto da aplicação não precise se preocupar com detalhes do banco.
- **Service Layer**: concentra as regras de negócio, deixando controllers mais simples e focados no fluxo da aplicação.

Essa combinação ajuda a construir APIs limpas, organizadas e fáceis de manter.

---

# Por que usar a separação: Rotas → Controller → Service → Repository → Banco de Dados

Separar a API em camadas ajuda a deixar o código mais limpo, fácil de entender e manter. Cada parte tem uma função específica, evitando mistura de responsabilidades e um código bagunçado.

---

## O que faz cada camada?

- **Rotas**  
  Define os caminhos da API e chama o controller certo.

- **Controller**  
  Recebe as requisições da rota, organiza os dados e chama o service.

- **Service**  
  Fica com a lógica principal do sistema (regras de negócio).

- **Repository**  
  Cuida do acesso ao banco de dados (insert, select, update, delete).

- **Banco de Dados**  
  Armazena os dados que a API usa (MySQL).

---

## Vantagens

- **Organização**: cada parte faz só uma coisa.
- **Reutilização**: facilita reaproveitar código.
- **Manutenção fácil**: se der problema, é mais fácil achar e corrigir.
- **Testes mais simples**: dá pra testar cada parte separada.
- **Escalabilidade**: fica mais fácil crescer o projeto organizado.

---

# Configuração para rodar (Somente config do banco de dados)

1. Instale o MySQL e crie o banco de dados:

```sql
CREATE DATABASE loja;
```

2. Crie as tabelas de cliente e produto:

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



