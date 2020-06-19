/**
 * Utilizando o KNEX fazemos a craiçao de itens
 * que irão ter infos já
 * Basicamente ele irá popular o banco com alguns dados padrões
 */
import Knex from "knex";

export async function seed(knex: Knex) {
  await knex("items").insert([
    { title: "Lampadas", image: "lampadas.svg" },
    { title: "Pilhas e Baterias", image: "baterias.svg" },
    { title: "Papéis e Papelão", image: "papeis-papelao.svg" },
    { title: "Resíduos Eletrônicos", image: "eletronicos.svg" },
    { title: "Resíduos Orgânicos", image: "organicos.svg" },
    { title: "óleo de Cozinha", image: "oleo.svg" },
  ]); //estamo inserindo os registros na tabela
}
