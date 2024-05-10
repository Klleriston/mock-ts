import { Router } from "express";
import { createBookRoute, deleteBookRoute, getBookRoute, getBooksRoute } from "./controller/book-controller";
import { createCategoryRoute, deleteCategoryRoute, getCategoriesRoute, getCategoryRoute } from "./controller/category-controller";
const router = Router();

router.get("/books", getBooksRoute)
router.get("/books/:id", getBookRoute)
router.post("/books", createBookRoute)
router.delete("/books/:id", deleteBookRoute)
router.get("/categories", getCategoriesRoute)
router.get("/categories/:id", getCategoryRoute)
router.post("/categories", createCategoryRoute)
router.delete("/categories/:id", deleteCategoryRoute)

export { router }