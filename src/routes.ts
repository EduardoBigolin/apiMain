import { Router } from "express";

const routes = Router();

routes.get("/", (req, res) => {
  res.json({
    message: "welcome to the api 1",
  });
});

export default routes;
