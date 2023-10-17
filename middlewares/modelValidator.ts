import { Request, Response } from "express";
import { Validator } from "node-input-validator";
import modelErrors from "../settings/modelValidatorErrors";

class ModelValidator {

    product = async (req: Request, res: Response, next: any) => {
        const { body } = req;
        const validator = new Validator(body, {
            name: 'string|required',
            description: 'string|required',
            sku: 'string|required',
            image: 'string|required',
            price: 'numeric|required',
            stock: 'numeric|required',
            tags: 'required|array'
        }, modelErrors
        );

        let matched = await validator.check();
        (matched)
            ? next()
            : res.status(406).send(validator.errors);
    }

    tag = async (req: Request, res: Response, next: any) => {
        const { body } = req;
        const validator = new Validator(body, {
            name: 'string|required',
        }, modelErrors
        );

        let matched = await validator.check();
        (matched)
            ? next()
            : res.status(406).send(validator.errors);
    }
}

export default ModelValidator;