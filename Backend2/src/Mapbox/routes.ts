import { Mapbox } from "./Mapbox";

export default function mapboxRoutes(server, options, next) {
    // Initialize repositories
    const repo = server.db.getRepository(Mapbox);

    // Post
    server.post('/', async (req, res)=> {
        const {category, plantingSite } = req.body
        const mapbox = new Mapbox
        mapbox.category = category
        mapbox.plantingSite = plantingSite
        await repo.save(mapbox)
        return res.status(200)
    })

    // Get
    server.get('/', async (req, res)=> {
        const mapbox = await repo.find( { relations: {
            Category:'true',
            PlantingSite:'true'
        } 
    });

        if (!mapbox) {
          return res.status(404).json({ error: 'Mapbox not found' });
        }
        return res.send(mapbox);
    
    })

    next();
  }
  