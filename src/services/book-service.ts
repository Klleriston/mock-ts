import { createBookRepo, deleteBookRepo, getBookRepo, getBooksRepo } from "../repositories/book-repository";
import { CreateBookDTO } from "../models/book-model";

export async function getBooks() {
  return await getBooksRepo();
}

export async function getBook(id: number) {
  return await getBookRepo(id);
}

export async function createBook(createBookDto: CreateBookDTO) {
  return await createBookRepo(createBookDto);
}

export async function deleteBook(id: number) {
  return await deleteBookRepo(id);
}