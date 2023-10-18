import { Request, Response } from 'express';
import Home from '../models/homeModel';

const homeController = {

    // Récupérer tous les logements
    getAllHomes: async (req: Request, res: Response): Promise<void> => {
        try {
            const homes = await Home.find();
            res.status(200).json(homes);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Récupérer un logement par son ID
    getHomeById: async (req: Request, res: Response): Promise<any> => {
        try {
            const home = await Home.findById(req.params.id);
            if (!home) {
                return res.status(404).json({ message: 'Logement non trouvé.' });
            }
            res.status(200).json(home);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Ajouter un nouveau logement
    createHome: async (req: Request, res: Response): Promise<any> => {
        const newHome = new Home(req.body);
        try {
            const savedHome = await newHome.save();
            res.status(201).json(savedHome);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    // Mettre à jour un logement
    updateHome: async (req: Request, res: Response): Promise<any> => {
        try {
            const updatedHome = await Home.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!updatedHome) {
                return res.status(404).json({ message: 'Logement non trouvé.' });
            }
            res.status(200).json(updatedHome);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    // Supprimer un logement
    deleteHome: async (req: Request, res: Response): Promise<any> => {
        try {
            const deletedHome = await Home.findByIdAndDelete(req.params.id);
            if (!deletedHome) {
                return res.status(404).json({ message: 'Logement non trouvé.' });
            }
            res.status(200).json({ message: 'Logement supprimé avec succès.' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

export default homeController;
