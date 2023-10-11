export const EnvVariables = {
    PORT: process.env.PORT as any | 3000,
    PRODUCTION: process.env.PRODUCTION as any | false,
    DB_HOST: process.env.DB_HOST as any | 'mongodb://127.0.0.1:27017/Rocketfy'
};