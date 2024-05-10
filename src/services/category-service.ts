import { CreateCategoryDTO } from "../models/category-model";
import { createCategoryRepo, deleteCategoryRepo, getCategoriesRepo, getCategoryRepo } from "../repositories/category-repository";

export async function getCategory(id: number) {
    return await getCategoryRepo(id)
}

export async function getCategories() {
    return await getCategoriesRepo()
}

export async function createCategory(createCategoryDTO: CreateCategoryDTO) {
    return await createCategoryRepo(createCategoryDTO)
}

export async function deleteCategory(id: number) {
    return await deleteCategoryRepo(id)
}
