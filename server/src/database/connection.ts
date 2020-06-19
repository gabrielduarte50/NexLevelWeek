//Banco que usaremos: SQLite junto com o Knex.js, que unifica o tipo de linguagem para bancos relacionais
//O formato de escrita é similar a JS, não tem o verbismo de bancos de dado
import knex from "knex";
import path from "path"; // para trabalahr com caminhos, usaremos para o connection

/***
 * ENTIDADES
 *
 * points -- pontos de coleta -- image,name,email,wpp,latitude,longitude,city,UF
 * items -- items para coleta -- image,title
 * point_items -- tabela Pivot (N-N). Relacionamento dos itens que um ponto coleta. --ids de point e ids de itens)
 *
 * MIGRATIONS
 *
 * historico do banco de dados, versionamento
 * Migrations tem ordem, entao é preciso definir a points e itens
 * antes da point_itens
 */

const connection = knex({
  client: "sqlite3",
  connection: {
    filename: path.resolve(__dirname, "database.sqlite"), //faz um join e padroniza acessso a pastas
  },
});

export default connection;
