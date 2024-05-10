import { Response, Request } from "express";
import { createCategory, deleteCategory, getCategories, getCategory } from "../services/category-service";

export async function getCategoryRoute(req: Request, res:Response) {
    const id = parseInt(req.params.id);
    try {
        const category = await getCategory(id);
        res.status(200).json({ message: "Sucess", category })
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
}

export async function getCategoriesRoute(req: Request, res:Response) {
    try {
        const categories = await getCategories();
        res.status(200).json(categories);
    } catch (err) {
        console.error(err);
        res.status(500).json(err)
    }
}

export async function createCategoryRoute(req: Request, res:Response) {
    const data = req.body;
    try { 
        const category = await createCategory(data);
        res.status(201).json({ message: "Sucess", category });
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
}

export async function deleteCategoryRoute(req: Request, res:Response) {
    const id = parseInt(req.params.id);
    try { 
        if (id == null) {
            throw new Error("Category id required")
          }
        const category = await deleteCategory(id);
        res.status(204).json(category);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
}