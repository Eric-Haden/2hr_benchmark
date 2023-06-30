import { PlantingSite } from "./PlantingSite";

export default function plantingSiteRoutes(server, options, next) {
    // Initialize repositories
    const repo = server.db.getRepository(PlantingSite);

    // Get
    server.get('/plantingSite', async (req, res)=> {
        const {plantingSiteId} = req.body
        const plantingSite = await repo.findOne(plantingSiteId, { relations: ['mapboxes'] });

        if (!plantingSite) {
          return res.status(404).json({ error: 'Planting site not found' });
        }
    
        const mapboxes = plantingSite.mapboxes;
    
        return res.send(mapboxes);
    
    })

    next();
  }
  