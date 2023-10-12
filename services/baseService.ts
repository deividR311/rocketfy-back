import mongoose from "mongoose";

class BaseService {
    models: mongoose.Models;
    constructor() {
        this.models = mongoose.models;
    }
}

export default BaseService;
