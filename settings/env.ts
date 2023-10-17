export const EnvVariables = {
    PORT: process.env.PORT as any | 3000,
    PRODUCTION: process.env.PRODUCTION as any | false,
    DB_HOST: process.env.DB_HOST as any | 'mongodb+srv://rocketfy:rocketfy@rocketfy.bmnkrxd.mongodb.net/?retryWrites=true&w=majority'
};