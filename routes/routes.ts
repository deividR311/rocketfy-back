import express, { Request, Response } from "express";
import errors from "../settings/errors";

import productRoutes from "./productRoutes";
import tagRoutes from "./tagRoutes";

const appRouter = (app: express.Application) => {
    app.use('/api/product', productRoutes);
    app.use('/api/tag', tagRoutes);

    // ROUTES FAILED
    app.use((req: Request, res: Response) => { res.status(404).json({ 'error': errors.service_not_found }) });
}

export default appRouter;