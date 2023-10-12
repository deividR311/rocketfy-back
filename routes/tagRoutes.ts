import { Router } from "express";
import { TagController } from "../controllers";
import ModelValidator from "../middlewares/modelValidator";

const tagRoutes = Router();
const tagController = new TagController();
const TagValidator = new ModelValidator();

tagRoutes.get('/getAll', tagController.getTags);
tagRoutes.get('/:id', tagController.getTagById);
tagRoutes.post('/create', TagValidator.tag, tagController.createTag);
tagRoutes.put('/:id', tagController.updateTag);
tagRoutes.delete('/:id', tagController.deleteTag);

export default tagRoutes;