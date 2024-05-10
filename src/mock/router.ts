
// router.put("/books/:id", async (req, res) => {
//     const id = parseInt(req.params.id);
//     try {


//         const data = req.body;
//         await prisma.book.findFirst({
//             where: {
//                 id: id
//             },
//         })
//         const book = await prisma.book.update(data);
//         res.status(200).json({ message: "Updated", book });
//     } catch (err) {
//         if (id == null) {
//             return res.status(400).json({ message: "Book id required" })
//         }
//         console.error(err);
//         res.status(500).json(err);
//     }
// })

 // ---------------------------

// router.put("/categories/:id", async (req, res) => {
//     const id = parseInt(req.params.id);
//     try {
//         await prisma.category.findFirst({
//             where: {
//                 id: id,
//             }
//         })
//         const category = await prisma.category.update({
//             where: {
//                 id: id
//             },
//             data: req.body
//         });
//         res.status(200).json({ message: "Updated", category });
//     } catch (err) {
//         if (id == null) {
//             return res.status(400).json({ message: "Category id required" })
//         }
//         console.error(err);
//         res.status(500).json(err);
//     }
// })