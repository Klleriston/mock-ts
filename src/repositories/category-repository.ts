import { prisma } from "../database/prisma";
import { CreateCategoryDTO } from "../models/category-model";

export async function getCategoriesRepo() {
    return await prisma.category.findMany();
}

export async function getCategoryRepo(id: number) {
    return await prisma.category.findFirst({
        where: {
            id
        }
    });
}

export async function createCategoryRepo(data: CreateCategoryDTO) {
    return await prisma.category.create({ data });
}

export async function deleteCategoryRepo(id: number) {
    return await prisma.category.delete({
        where: {
            id
        }
    })
}