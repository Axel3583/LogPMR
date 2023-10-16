const mongoose = require('mongoose');

const homeSchema = new mongoose.Schema({
    // Caractéristiques du logement
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

module.exports = mongoose.model('Home', homeSchema);;
