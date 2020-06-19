import Knex from "knex"; //K maiusuclo porque é de tipo, do typescript, assim conseguimos obter os metodos
/***
 * Up -- realizar alterações no banco, ou seja criar a tabela
 *
 * Down -- retorna ou deletar a tabela que criamos.
 */
export async function up(knex: Knex) {
  return knex.schema.createTable("points", (table) => {
    table.increments("id").primary(); //incrementar o campo e é a chave primária da tabela
    table.string("image").notNullable();
    table.string("name").notNullable();
    table.string("email").notNullable();
    table.string("whatsapp").notNullable();
    table.decimal("longitude").notNullable();
    table.decimal("latitude").notNullable();
    table.string("city").notNullable();
    table.string("uf", 2).notNullable();
  });
}
export async function down(knex: Knex) {
  return knex.schema.dropTable("point");
}
