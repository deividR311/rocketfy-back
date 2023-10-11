"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvVariables = void 0;
exports.EnvVariables = {
    PORT: process.env.PORT,
    PRODUCTION: process.env.PRODUCTION,
    DB_HOST: process.env.DB_HOST,
    DB_DATABASE: process.env.DB_DATABASE,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_DIALECT: process.env.DB_DIALECT,
    SEED: process.env.SEED,
    EXPIRESIN: process.env.EXPIRESIN,
    JWTSECRETKEY: process.env.JWTSECRETKEY
};
