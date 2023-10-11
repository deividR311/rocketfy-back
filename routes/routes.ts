import express, { Request, Response } from "express";
import productRoutes from "./productRoutes";
import errors from "../settings/errors";

const appRouter = (app: express.Application) => {
    app.use('/api/product', productRoutes);

    // ROUTES FAILED
    app.use((req: Request, res: Response) => { res.status(404).json({ 'error': errors.service_not_found }) });
}

export default appRouter;