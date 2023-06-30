import { Category } from "./Category";

export default function categoryRoutes(server, options, next) {
    // Initialize repositories
    const repo = server.db.getRepository(Category);

    // Post
    server.post('/category', async (req, res)=> {
        const {categoryName} = req.body
        const category = new Category
        category.id = categoryName
        await repo.save(category)
    })

    // Get
    server.get('/category', async (req, res)=> {
        await res.status(200).send(repo.find())
    })

    next();
  }
  