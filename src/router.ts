import { Router } from "express";
import { prisma } from "./database/prisma";
const router = Router();

router.get("/books", async (req, res) => {
    try {
        const books = await prisma.book.findMany();
        res.status(200).json(books);
    } catch (err) {
        console.error(err);
        res.status(500).send(err)
    }
})

router.post("/books", async (req, res) => {
    try {
        const data = req.body;
        const book = await prisma.book.create({
            data
        })
        res.status(201).json({ message: "Sucess", book });
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
})

router.put("/books/update/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        if (id == null) {
            return res.status(400).json({ message: "Book id required" })
        }
        const data = req.body;
        await prisma.book.findFirst({
            where: {
                id: id
            },
        })
        const book = await prisma.book.update(data);
        res.status(200).json({ message: "Updated", book });
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
})

router.delete("/books/delete/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        if (id == null) {
            return res.status(400).json({ message: "Book id required" })
        }
        await prisma.book.delete({
            where: {
                id: id
            }
        });
        res.send(204).json({ message: "Deleted" });
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
})

router.get("/categories", async (req, res) => {
    try {
        const categories = await prisma.category.findMany();
        res.status(200).json(categories);
    } catch (err) {
        console.error(err);
        res.status(500).send(err)
    }
})

router.post("/categories", async (req, res) => {
    try {
        const data = req.body;
        const category = await prisma.category.create({
            data
        })
        res.status(201).json({ message: "Sucess", category });
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
})

router.put("/categories/update/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        if (id == null) {
            return res.status(400).json({ message: "Category id required" })
        }
        await prisma.category.findFirst({
            where: {
                id: id,
            }
        })
        const category = await prisma.category.update({
            where: {
                id: id
            },
            data: req.body
        });
        res.status(200).json({ message: "Updated", category });
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
})

router.delete("/categories/delete/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        if (id == null) {
            return res.status(400).json({message: "Category Id required"})
        }
            await prisma.category.delete({
                where: {
                    id: id
                }
            });
        res.status(204).json({message: "Deleted"})
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
})
export { router }