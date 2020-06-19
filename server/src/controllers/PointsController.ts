import { Request, Response } from "express";
import knex from "../database/connection"; // conexao ao banco de dados
class PointsController {
  async index(request: Request, response: Response) {
    // filtros de cidade, uf e items -- pegamos do query parms
    const { city, uf, items } = request.params;
    const parsedItems = String(items)
      .split(",")
      .map((item) => Number(item.trim()));

    const points = await knex("points")
      .join("point_items", "points.id", "=", "point_items.point_id")
      .whereIn("point_items.point_id", parsedItems)
      .where("city", String(city))
      .where("uf", String(uf))
      .distinct()
      .select("points.*"); //buscando todos os pontos que tem o item dentro do filtro que é o pardeItem
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;
    const point = await knex("points").where("id", id).first(); // vou na tabela oints, onde o id é o primeiro igual ao id

    if (!point) {
      return response.status(400).json({ message: "Point not found" });
    }
    const items = await knex("items")
      .join("point_items", "items.id", "-", "point_items.item_id")
      .where("point_items.point_id", id)
      .select("items.title"); //retornar os elementos que são aceitos no ponto onde o ponto e os items tem o id iguais
    return response.json({ point, items });
  }

  async create(request: Request, response: Response) {
    const {
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      items,
    } = request.body;

    const trx = await knex.transaction(); //irá ajudar a n ter um insert criado caso outro de pau

    const point = {
      image:
        "https://images.unsplash.com/photo-1592272594815-8ef5673d1e3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
    };
    const insertedIds = await trx("points").insert(point);
    //relacionando o ponto com a tabela de items. Desssa forma
    //estamos vendo quais items o ponto de coleta, coleta

    const point_id = insertedIds[0]; //pq insert retorna os ids e vamo spegar a 1 posiçao

    const pointItems = items.map((item_id: number) => {
      return {
        item_id,
        point_id,
      };
    });

    await trx("point_items").insert(pointItems);
    await trx.commit(); // faz os inserts na tabela, sem isso, não dá

    return response.json({ id: point_id, ...point }); //retornamos um objeto com o id do ponto e todas as partes de point
    //em knex usamos shortsintaxe, pois usamos as variaveis com o mesmo nome da origem
    //usamos desestruturaçao e inserimos os pontos na tabela
    //menos o item, poi ele é um 'schemam' tb, por isso fazemos diferente
  }
}
export default PointsController;
