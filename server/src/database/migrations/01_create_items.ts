import Knex from "knex";
export async function up(knex: Knex) {
  return knex.schema.createTable("items", (table) => {
    table.increments("id").primary(); //incrementar o campo e é a chave primária da tabela
    table.string("image").notNullable();
    table.string("title").notNullable();
  });
}
export async function down(knex: Knex) {
  return knex.schema.dropTable("items");
}
