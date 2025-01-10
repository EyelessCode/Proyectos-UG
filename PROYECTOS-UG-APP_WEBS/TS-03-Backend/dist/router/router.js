"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const signoVitalController_1 = require("../controller/signoVitalController");
const router = (0, express_1.Router)();
const controller = new signoVitalController_1.SignoVitalController();
router.get('/signoVital', controller.controllerGetAll);
router.get('/signoVital/:id', controller.controllerGetOne);
router.post('/signoVital', controller.controllerCreate);
router.put('/signoVital/:id', controller.controllerUpdate);
router.delete('/signoVital/:id', controller.controllerDelete);
exports.default = router;
//# sourceMappingURL=router.js.map