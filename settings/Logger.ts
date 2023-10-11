import  * as log4js from 'log4js';

log4js.configure({
    appenders: { cheese: { type: 'file', filename: 'logs/log4js.log' } },
    categories: { default: { appenders: ['cheese'], level: 'debug' } }
});

const getLogger = () => {
    return log4js.getLogger('cheese');
}

export default getLogger;