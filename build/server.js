"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.json({
        message: "First API with TypeScript ",
    });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("[HTTP] Server is listening on port [::]:%s", PORT);
});
