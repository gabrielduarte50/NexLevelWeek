import Knex from "knex";
export async function up(knex: Knex) {
  return knex.schema.createTable("points_items", (table) => {
    table.increments("id").primary(); //incrementar o campo e é a chave primária da tabela

    table
      .integer("point_id") //integer por padrao pq é de outro id
      .notNullable()
      .references("id")
      .inTable("points"); //cria chave estrnageira para garantir que tenha ids vlaidos vindo da points

    table.integer("item_id").notNullable().references("id").inTable("items"); ///mesma coisa de cima
  });
}
export async function down(knex: Knex) {
  return knex.schema.dropTable("items");
}
