import express from "express";

import PointsController from "./controllers/PointsController";
import ItemsController from "./controllers/ItemsController";

const routes = express.Router(); // serve para desacoplar as rotas do arquivo app
const pointsController = new PointsController(); //instancia da classe
const itemsController = new ItemsController();
routes.get("/items", itemsController.index);

routes.post("/points", pointsController.create); //método que chamamos
routes.get("/points", pointsController.index);
routes.get("/points/:id", pointsController.show); //metodo para busca especifiac
export default routes;
