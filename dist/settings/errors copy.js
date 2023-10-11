"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errors;
(function (errors) {
    errors["internal_server_error"] = "Internal Server Error";
    errors["user_pass_invalid"] = "User or password invalid";
    errors["service_not_found"] = "Service not found";
    errors["token_invalid"] = "Invalid token";
    errors["error"] = "error";
    errors["token_failed"] = "Token failed";
})(errors || (errors = {}));
;
exports.default = errors;
