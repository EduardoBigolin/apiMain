import express from "express";
import routes from "./routes";

export class Express {
  private app = express();

  public openServer(PORT: number) {
    this.middleware();
    this.routes();
    this.app.listen(PORT, () => {
      console.log("[HTTP] Server is listening on port [::]:%s", PORT);
    });
  }
  public middleware() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  public routes() {
    this.app.use("/api", routes);
  }
}
