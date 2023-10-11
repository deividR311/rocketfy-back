import getLogger from "../settings/Logger";
import errors from "../settings/errors";
import success from "../settings/success";

class BaseController {
    logger: any;
    success: typeof success;
    errors: typeof errors;

    constructor() {
        this.logger = getLogger();
        this.success = success;
        this.errors = errors;
    }
}

export default BaseController;
