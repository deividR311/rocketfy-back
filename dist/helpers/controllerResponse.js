"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controllerResponse = void 0;
const controllerResponse = ({ message, response, status }) => {
    return {
        status, message, response: response
    };
};
exports.controllerResponse = controllerResponse;
