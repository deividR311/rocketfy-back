import BaseService from "./baseService";

export class ProductService extends BaseService {
    constructor() {
        super();
    }

    async getProducts() {
        try {
            return [];
        } catch (err) {
            throw err;
        }
    }
};