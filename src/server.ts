import "dotenv/config";
import { Express } from "./Express";

new Express().openServer(Number(process.env.PORT) || 3000);
