import { Request, Response } from "express";
import { createBook, deleteBook, getBook, getBooks } from "../services/book-service";

export async function getBooksRoute(req: Request, res: Response) {
  try {
    const books = await getBooks();
    res.status(200).json(books);
  } catch (err) {
    console.error(err);
    res.status(500).json(err)
  }
}

export async function getBookRoute(req: Request, res: Response) {
  const id = parseInt(req.params.id)
  try {
    if (id == null) {
      throw new Error("Book id required")
    }
    const book = await getBook(id);
    res.status(200).json(book);
  } catch (err) {
    console.error(err);
    res.status(500).json(err)
  }
}

export async function createBookRoute(req: Request, res: Response) {
  const { title, categoryId } = req.body;
  try {
    const book = await createBook({ title, categoryId });
    res.status(201).json({ message: "Sucess", book });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
}

export async function deleteBookRoute(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  try {
    if (id == null) {
      throw new Error("Book id required")
    }
    const book = await deleteBook(id);
    res.status(204).json(book);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
}