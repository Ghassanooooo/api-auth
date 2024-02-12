import controller from "./controller";
import middleware from "./middleware";
import { Express, Request, Response } from "express";

function routes(app: Express) {
  /************* GET Routes (READ)******************/
  app.get("/find/one", controller.find.findOne);
  app.get("/find/many", controller.find.findMany);
  /************* POST Routes (CREATE)******************/
  app.post("/create/one", controller.create.createOne);
  app.post("/create/many", controller.create.createMany);
  /************* PUT Routes (UPDATE)******************/
  app.put("/update/one", controller.update.updateOne);
  app.put("/update/many", controller.update.updateMany);
  /************* DELETE Routes (REMOVE)******************/

  app.delete("/remove/one", controller.remove.removeOne);
  app.delete("/remove/many", controller.remove.removeMany);

  /***********************************************/

  app.get("/refresh", controller.update.refresh);
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));
}
export default routes;
