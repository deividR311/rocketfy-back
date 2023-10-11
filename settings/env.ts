export const EnvVariables = {
    PORT : process.env.PORT as any | 3000,
    PRODUCTION : process.env.PRODUCTION as any | false,
    DB_HOST : process.env.DB_HOST as any | 'bvsxpnlbfole37aqx0rw-mysql.services.clever-cloud.com',
    DB_DATABASE : process.env.DB_DATABASE as string | 'bvsxpnlbfole37aqx0rw',
    DB_USERNAME : process.env.DB_USERNAME as any | 'ui6b5gph9gksuey3',
    DB_PASSWORD : process.env.DB_PASSWORD as any | 'hkd2q8hjAe47QR8wz8Pk',
    DB_DIALECT : process.env.DB_DIALECT as any | 'mysql',
    SEED : process.env.SEED as any | 'r27-@B_tQ6C+dx2MpsTP$F8*k+3J+Q',
    EXPIRESIN : process.env.EXPIRESIN as any | 600,
    JWTSECRETKEY : process.env.JWTSECRETKEY as any | '0dise4pptr4v31pr0y3ct'
};