/***
 * Arquivo para criar as migrations --> "rodar"
 *
 * com esse comandao rodamos a migration:
 *    npx knex migrate:latest --knexfile knexfile.ts migrate:latest
 * */

import path from "path";
module.exports = {
  client: "sqlite3",
  connection: {
    filename: path.resolve(__dirname, "src", "database", "database.sqlite"), //faz um join e padroniza acessso a pastas
  },
  migrations: {
    directory: path.resolve(__dirname, "src", "database", "migrations"), //faz um join e padroniza acessso a pastas
  },
  seeds: {
    directory: path.resolve(__dirname, "src", "database", "seeds"), //faz um join e padroniza acessso a pastas
  },
};
