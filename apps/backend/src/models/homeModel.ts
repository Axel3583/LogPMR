import mongoose, { Document, Schema, Model } from "mongoose";

// Define the home schema shape
interface IHome extends Document {
    emplacement: string;
    accessibilité: string[];
    description: string;
    servicesInclus: {
        [key: string]: boolean;
    };
    servicesOption: {
        [key: string]: boolean | number;
    };
    prix: {
        base: number;
        chargesComprises?: boolean;
        descriptionResidence?: string;
        eligibleAides?: boolean;
        surface?: {
            min?: number;
            max?: number;
        };
        servicesInclus?: boolean;
    };
    id_loueur: Schema.Types.ObjectId;
}

// Define the mongoose schema
const homeSchema: Schema = new Schema({
    emplacement: {
        type: String,
        required: true
    },
    accessibilité: [{
        type: String
    }],
    description: {
        type: String,
        required: true
    },
    // Services inclus
    servicesInclus: {
        accessibilité: Boolean,
        internet: Boolean,
        parking: Boolean,
        localVelo: Boolean,
        salleSport: Boolean,
        fibre: Boolean,
        laverie: Boolean,
        climatisation: Boolean,
        regisseur: Boolean,
        cameraSurveillance: Boolean,
        interphone: Boolean,
        ferRepasser: Boolean,
        vaisselle: Boolean,
        petitDejeuner: Boolean,
        gestionnaireSite: Boolean,
        salleReunion: Boolean,
        accueil: Boolean,
        telephone: Boolean,
        sauna: Boolean,
        distributeur: Boolean,
        piscine: Boolean,
        tv: Boolean,
        aspirateur: Boolean,
        photocopieuse: Boolean,
    },
    // Services en option
    servicesOption: {
        internet: Number,
        ferRepasser: Boolean,
        aspirateur: Boolean,
        laverie: Boolean,
        kitLinge: Boolean,
        photocopieuse: Boolean,
        parking: Number,
        tv: Number,
        menage: Number
    },
    // Prix
    prix: {
        base: Number,
        chargesComprises: Boolean,
        descriptionResidence: String,
        eligibleAides: {
            type: Boolean,
            default: false
        },
        surface: {
            min: Number,
            max: Number
        },
        servicesInclus: Boolean
    },
    // Relier à la table des loueurs
    id_loueur: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Loueur'
    }
});

const HomeModel: Model<IHome> = mongoose.model<IHome>('Home', homeSchema);

export default HomeModel;
