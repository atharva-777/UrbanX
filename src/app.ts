import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import bodyParser from "body-parser";
import { corsOptions } from "./config/corsConfig";

class App {
  public readonly app: Express;
  constructor() {
    this.app = express();
    this.routes();
    dotenv.config({ path: path.resolve(__dirname, "./.env") });
    this.app.use(bodyParser.json());
    this.app.use(express.json());
    this.app.use(cors(corsOptions));
    this.app.set("view engine", "ejs");
  }

  private routes(): void {
    this.app.get("/", (_req, res) => {
      res.send("welcome to ecom backend");
    });
  }
}

export const app = new App().app;
