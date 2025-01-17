"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./router/router"));
require("dotenv/config");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4001;
app.use(express_1.default.json());
app.use('/api', router_1.default);
app.get('/api', (req, res) => {
    res.send('HOLA MUNDO!');
});
app.listen(PORT, () => console.log(`ESCUCHANDO EN EL PUERTO ${PORT}`));
//# sourceMappingURL=app.js.map