import { prisma } from "../database/prisma";
import { CreateBookDTO } from "../models/book-model";

export async function getBookRepo(id: number) {
  return await prisma.book.findFirst({
    where: {
      id
    }
  })
}

export async function getBooksRepo() {
  return await prisma.book.findMany()
}

export async function createBookRepo(data: CreateBookDTO) {
  return await prisma.book.create({ data })
}

export async function deleteBookRepo(id: number) {
  return await prisma.book.delete({
    where: {
      id
    }
  })
}