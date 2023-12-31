"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = __importDefault(require("../settings/errors"));
const productRoutes_1 = __importDefault(require("./productRoutes"));
const tagRoutes_1 = __importDefault(require("./tagRoutes"));
const appRouter = (app) => {
    app.use('/api/product', productRoutes_1.default);
    app.use('/api/tag', tagRoutes_1.default);
    // ROUTES FAILED
    app.use((req, res) => { res.status(404).json({ 'error': errors_1.default.service_not_found }); });
};
exports.default = appRouter;
