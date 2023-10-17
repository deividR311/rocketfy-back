"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statusResponse = void 0;
const statusResponse = (code, message, res, response, status) => {
    return res.status(code).json({
        status: status,
        message: message,
        response: response
    });
};
exports.statusResponse = statusResponse;
