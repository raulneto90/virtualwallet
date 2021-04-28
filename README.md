# Desafio Carteira Virtual - Tecnospeed

## :information_source: Sobre o projeto

Sistema de gerenciamento de carteira virtual, onde é possível

- Cadastrar uma movimentação de entrada/saida
- Listar todas as movimentações
- Listar movimentações por período.
- Gerar arquivo CSV das movimentações (totais e por período).

## :postbox: Requisitos

- [X] Cadastrar movimentações financeiras de entrada e saída de
dinheiro.
- [X] Mostrar quanto dinheiro tenho na carteira.
- [X] Permitir cadastrar categorias para cada movimentação financeira.
- [X] Permitir cadastrar observações para cada movimentação financeira.
- [] Mostrar um gráfico de todas as entradas por categoria.
- [] Mostrar um gráfico de todas as saídas por categoria.
- [X] Gravar um histórico de entradas e saídas de dinheiro da carteira.
- [X] Permitir visualizar todo o histórico de movimentação de uma
carteira.
- [] Mostrar um gráfico visualizando o histórico das últimas 10
movimentações.
- [X] Permitir exportar todas as movimentações de um determinado mês
em formato CSV.
- [X] Permitir exportar todas as movimentações em formato CSV.

## :floppy_disk: Como utilizar o projeto

Para utilizar o projeto é necessário ter os seguintes recursos instalados:

### Projeto

- [X] Yarn
- [X] Git

### Backend

- [X] Docker
- [X] docker-compose

No seu terminal, digite:
```bash
$ git clone https://github.com/raulneto90/virtualwallet

# Instalar as dependências do backend
$ cd backend
$ yarn

# Rodar o docker-compose para baixar a imagem do banco de dados e do servidor node
$ docker-compose up
```
** :heavy_exclamation_mark: Importante: ** ao rodar o docker-compose up
o projeto e o banco de dados ficarão automaticamente online.

:warning: Crie um arquivo .env com as seguintes configurações:

```json
# Node environment
APP_PORT=3333

# Databse environment
DB_TYPE=postgres
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASS=docker
DB_NAME=virtualwallet
```

### Frontend

- [X] Yarn

No seu terminal, digite:
```bash
$ git clone https://github.com/raulneto90/virtualwallet

# Instalar as dependências do backend
$ cd frontend
$ yarn

# Iniciar em modo desenvolvimento
$ yarn start

---
Feito com ❤ por Raul Neto. Me siga no [Linkedin](https://www.linkedin.com/in/raul-neto-777bb988/)