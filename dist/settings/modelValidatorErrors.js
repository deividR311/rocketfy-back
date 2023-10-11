"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var modelErrors;
(function (modelErrors) {
    modelErrors["required"] = "The :attribute field must not be empty.";
    modelErrors["email"] = "E-mail must be a valid email address.";
    modelErrors["string"] = "The :attribute field must be a string.";
    modelErrors["maxLength"] = "The :attribute field is biggest.";
    modelErrors["numeric"] = "The :attribute field must be a number.";
    modelErrors["boolean"] = "The :attribute field must be a boolean.";
})(modelErrors || (modelErrors = {}));
exports.default = modelErrors;
