const mongoose = require('mongoose')

const Pilot = require('../models/pilot.model')
const Circuit = require('../models/circuit.model')
const Constructor = require('../models/constructor.model')

// mongoose.connect(`mongodb://localhost/${dbName}`)


const pilots = [

    {
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/82/2019_Formula_One_tests_Barcelona%2C_Albon_%2847200030682%29.jpg",
        permanentNumber: "23",
        code: "ALB",
        url: "http://en.wikipedia.org/wiki/Alexander_Albon",
        givenName: "Alexander",
        familyName: "Albon",
        dateOfBirth: "1996-03-23",
        nationality: "Thai"
    },

    {
        photo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/2019_Formula_One_tests_Barcelona%2C_Bottas_%2847200028912%29.jpg",
        permanentNumber: "77",
        code: "BOT",
        url: "http://en.wikipedia.org/wiki/Valtteri_Bottas",
        givenName: "Valtteri",
        familyName: "Bottas",
        dateOfBirth: "1989-08-28",
        nationality: "Finnish"
    }, {
        photo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/2019_Formula_One_tests_Barcelona%2C_Gasly_%2847200027932%29.jpg",
        permanentNumber: "10",
        code: "GAS",
        url: "http://en.wikipedia.org/wiki/Pierre_Gasly",
        givenName: "Pierre",
        familyName: "Gasly",
        dateOfBirth: "1996-02-07",
        nationality: "French"
    },
    {
        photo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/2019_Formula_One_tests_Barcelona%2C_Giovinazzi_%2847200025952%29.jpg",
        permanentNumber: "99",
        code: "GIO",
        url: "http://en.wikipedia.org/wiki/Antonio_Giovinazzi",
        givenName: "Antonio",
        familyName: "Giovinazzi",
        dateOfBirth: "1993-12-14",
        nationality: "Italian"
    }, {
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/87/F12019_Schloss_Gabelhofen_%2813%29.jpg",
        permanentNumber: "8",
        code: "GRO",
        url: "http://en.wikipedia.org/wiki/Romain_Grosjean",
        givenName: "Romain",
        familyName: "Grosjean",
        dateOfBirth: "1986-04-17",
        nationality: "French"
    }, {
        photo: "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg",
        permanentNumber: "44",
        code: "HAM",
        url: "http://en.wikipedia.org/wiki/Lewis_Hamilton",
        givenName: "Lewis",
        familyName: "Hamilton",
        dateOfBirth: "1985-01-07",
        nationality: "British"
    },
    {
        photo: "https://upload.wikimedia.org/wikipedia/commons/d/de/2019_Formula_One_tests_Barcelona%2C_Hulkenberg_%2840287128313%29.jpg",
        permanentNumber: "27",
        code: "HUL",
        url: "http://en.wikipedia.org/wiki/Nico_H%C3%BClkenberg",
        givenName: "Nico",
        familyName: "Hülkenberg",
        dateOfBirth: "1987-08-19",
        nationality: "German"
    }, {
        photo: "https://upload.wikimedia.org/wikipedia/commons/9/90/2019_Formula_One_tests_Barcelona%2C_Kubica_%2832309897777%29.jpg",
        permanentNumber: "88",
        code: "KUB",
        url: "http://en.wikipedia.org/wiki/Robert_Kubica",
        givenName: "Robert",
        familyName: "Kubica",
        dateOfBirth: "1984-12-07",
        nationality: "Polish"
    }, {
        photo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Daniil_Kvyat_USA_2017.jpg",
        permanentNumber: "26",
        code: "KVY",
        url: "http://en.wikipedia.org/wiki/Daniil_Kvyat",
        givenName: "Daniil",
        familyName: "Kvyat",
        dateOfBirth: "1994-04-26",
        nationality: "Russian"
    },
    {
        photo: "https://upload.wikimedia.org/wikipedia/commons/4/48/F12019_Schloss_Gabelhofen_%2825%29.jpg",
        permanentNumber: "16",
        code: "LEC",
        url: "http://en.wikipedia.org/wiki/Charles_Leclerc",
        givenName: "Charles",
        familyName: "Leclerc",
        dateOfBirth: "1997-10-16",
        nationality: "Monegasque"
    }, {
        photo: "https://upload.wikimedia.org/wikipedia/commons/a/ab/2019_Formula_One_tests_Barcelona%2C_Magnussen_%2832309895977%29.jpg",
        permanentNumber: "20",
        code: "MAG",
        url: "http://en.wikipedia.org/wiki/Kevin_Magnussen",
        givenName: "Kevin",
        familyName: "Magnussen",
        dateOfBirth: "1992-10-05",
        nationality: "Danish"
    }, {
        photo: "https://upload.wikimedia.org/wikipedia/commons/4/42/Lando_Norris_Formula_1_Driver_%2849379469418%29_%28cropped%29.jpg",
        permanentNumber: "4",
        code: "NOR",
        url: "http://en.wikipedia.org/wiki/Lando_Norris",
        givenName: "Lando",
        familyName: "Norris",
        dateOfBirth: "1999-11-13",
        nationality: "British"
    },
    {
        photo: "https://upload.wikimedia.org/wikipedia/commons/f/f3/2019_Formula_One_tests_Barcelona%2C_P%C3%A9rez_%2847200017422%29.jpg",
        permanentNumber: "11",
        code: "PER",
        url: "http://en.wikipedia.org/wiki/Sergio_P%C3%A9rez",
        givenName: "Sergio",
        familyName: "Pérez",
        dateOfBirth: "1990-01-26",
        nationality: "Mexican"
    }, {
        photo: "https://upload.wikimedia.org/wikipedia/commons/9/96/F12019_Schloss_Gabelhofen_%2822%29.jpg",
        permanentNumber: "7",
        code: "RAI",
        url: "http://en.wikipedia.org/wiki/Kimi_R%C3%A4ikk%C3%B6nen",
        givenName: "Kimi",
        familyName: "Räikkönen",
        dateOfBirth: "1979-10-17",
        nationality: "Finnish"
    }, {
        photo: "https://upload.wikimedia.org/wikipedia/commons/9/96/F12019_Schloss_Gabelhofen_%2818%29.jpg",
        permanentNumber: "3",
        code: "RIC",
        url: "http://en.wikipedia.org/wiki/Daniel_Ricciardo",
        givenName: "Daniel",
        familyName: "Ricciardo",
        dateOfBirth: "1989-07-01",
        nationality: "Australian"
    },
    {
        photo: "https://upload.wikimedia.org/wikipedia/commons/3/36/2019_Formula_One_tests_Barcelona%2C_Russell_%2833376134568%29.jpg",
        permanentNumber: "63",
        code: "RUS",
        url: "http://en.wikipedia.org/wiki/George_Russell_%28racing_driver%29",
        givenName: "George",
        familyName: "Russell",
        dateOfBirth: "1998-02-15",
        nationality: "British"
    }, {
        photo: "https://upload.wikimedia.org/wikipedia/commons/3/31/2019_Formula_One_tests_Barcelona%2C_Sainz_%2847251966861%29.jpg",
        permanentNumber: "55",
        code: "SAI",
        url: "http://en.wikipedia.org/wiki/Carlos_Sainz_Jr.",
        givenName: "Carlos",
        familyName: "Sainz",
        dateOfBirth: "1994-09-01",
        nationality: "Spanish"
    }, {
        photo: "https://upload.wikimedia.org/wikipedia/commons/e/e1/2019_Formula_One_tests_Barcelona%2C_Stroll_%2833376133178%29.jpg",
        permanentNumber: "18",
        code: "STR",
        url: "http://en.wikipedia.org/wiki/Lance_Stroll",
        givenName: "Lance",
        familyName: "Stroll",
        dateOfBirth: "1998-10-29",
        nationality: "Canadian"
    },
    {
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/86/2019_Formula_One_tests_Barcelona%2C_Verstappen_%2833376132698%29.jpg",
        permanentNumber: "33",
        code: "VER",
        url: "http://en.wikipedia.org/wiki/Max_Verstappen",
        givenName: "Max",
        familyName: "Verstappen",
        dateOfBirth: "1997-09-30",
        nationality: "Dutch"
    }, {
        photo: "https://upload.wikimedia.org/wikipedia/commons/1/12/2019_Formula_One_tests_Barcelona%2C_Vettel_%2847200008782%29.jpg",
        permanentNumber: "5",
        code: "VET",
        url: "http://en.wikipedia.org/wiki/Sebastian_Vettel",
        givenName: "Sebastian",
        familyName: "Vettel",
        dateOfBirth: "1987-07-03",
        nationality: "German"
    }

]

const circuits = [


    {
        photo: "https://upload.wikimedia.org/wikipedia/commons/3/31/Albert_Lake_Park_Street_Circuit_in_Melbourne%2C_Australia.svg",
        url: "http://en.wikipedia.org/wiki/Melbourne_Grand_Prix_Circuit",
        circuitName: "Albert Park Grand Prix Circuit",
        lat: "-37.8497",
        long: "144.968",
        locality: "Melbourne",
        country: "Australia"

    },
    {
        photo: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Austin_circuit.svg",
        url: "http://en.wikipedia.org/wiki/Circuit_of_the_Americas",
        circuitName: "Circuit of the Americas",
        lat: "30.1328",
        long: "-97.6411",
        locality: "Austin",
        country: "USA"

    }, {
        photo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Bahrain_International_Circuit--Grand_Prix_Layout.svg",
        url: "http://en.wikipedia.org/wiki/Bahrain_International_Circuit",
        circuitName: "Bahrain International Circuit",
        lat: "26.0325",
        long: "50.5106",
        locality: "Sakhir",
        country: "Bahrain"

    }, {
        photo: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Baku-F1-Street-Circuit-rev1.png",
        url: "http://en.wikipedia.org/wiki/Baku_City_Circuit",
        circuitName: "Baku City Circuit",
        lat: "40.3725",
        long: "49.8533",
        locality: "Baku",
        country: "Azerbaijan"

    }, {
        photo: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Formula1_Circuit_Catalunya.svg",
        url: "http://en.wikipedia.org/wiki/Circuit_de_Barcelona-Catalunya",
        circuitName: "Circuit de Barcelona-Catalunya",
        lat: "41.57",
        long: "2.26111",
        locality: "Montmeló",
        country: "Spain"

    }, {
        photo: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Hockenheim2012.svg",
        url: "http://en.wikipedia.org/wiki/Hockenheimring",
        circuitName: "Hockenheimring",
        lat: "49.3278",
        long: "8.56583",
        locality: "Hockenheim",
        country: "Germany"

    }, {
        photo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Hungaroring.svg",
        url: "http://en.wikipedia.org/wiki/Hungaroring",
        circuitName: "Hungaroring",
        lat: "47.5789",
        long: "19.2486",
        locality: "Budapest",
        country: "Hungary"

    }, {
        photo: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Circuit_Interlagos.svg",
        url: "http://en.wikipedia.org/wiki/Aut%C3%B3dromo_Jos%C3%A9_Carlos_Pace",
        circuitName: "Autódromo José Carlos Pace",
        lat: "-23.7036",
        long: "-46.6997",
        locality: "São Paulo",
        country: "Brazil"

    }, {
        photo: "https://upload.wikimedia.org/wikipedia/commons/f/f0/1_singapore_f1_night_race_2012_city_skyline.jpg",
        url: "http://en.wikipedia.org/wiki/Marina_Bay_Street_Circuit",
        circuitName: "Marina Bay Street Circuit",
        lat: "1.2914",
        long: "103.864",
        locality: "Marina Bay",
        country: "Singapore"

    },
    {
        photo: "https://upload.wikimedia.org/wikipedia/commons/3/36/Monte_Carlo_Formula_1_track_map.svg",
        url: "http://en.wikipedia.org/wiki/Circuit_de_Monaco",
        circuitName: "Circuit de Monaco",
        lat: "43.7347",
        long: "7.42056",
        locality: "Monte-Carlo",
        country: "Monaco"

    }, {
        photo: "mohttps://upload.wikimedia.org/wikipedia/commons/f/f8/Monza_track_map.svgnza",
        url: "http://en.wikipedia.org/wiki/Autodromo_Nazionale_Monza",
        circuitName: "Autodromo Nazionale di Monza",
        lat: "45.6156",
        long: "9.28111",
        locality: "Monza",
        country: "Italy"

    }, {
        photo: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Circuit_Red_Bull_Ring.svg",
        url: "http://en.wikipedia.org/wiki/Red_Bull_Ring",
        circuitName: "Red Bull Ring",
        lat: "47.2197",
        long: "14.7647",
        locality: "Spielburg",
        country: "Austria"

    }, {
        photo: "https://upload.wikimedia.org/wikipedia/commons/3/39/Circut_Paul_Ricard_2018_layout_map.png",
        url: "http://en.wikipedia.org/wiki/Paul_Ricard_Circuit",
        circuitName: "Circuit Paul Ricard",
        lat: "43.2506",
        long: "5.79167",
        locality: "Le Castellet",
        country: "France"

    },
    {
        photo: "https://upload.wikimedia.org/wikipedia/commons/3/36/Aut%C3%B3dromo_Hermanos_Rodr%C3%ADguez_2015.svg",
        url: "http://en.wikipedia.org/wiki/Aut%C3%B3dromo_Hermanos_Rodr%C3%ADguez",
        circuitName: "Autódromo Hermanos Rodríguez",
        lat: "19.4042",
        long: "-99.0907",
        locality: "Mexico City",
        country: "Mexico"

    }, {
        photo: "https://upload.wikimedia.org/wikipedia/commons/1/14/Shanghai_International_Racing_Circuit_track_map.svg",
        url: "http://en.wikipedia.org/wiki/Shanghai_International_Circuit",
        circuitName: "Shanghai International Circuit",
        lat: "31.3389",
        long: "121.22",
        locality: "Shanghai",
        country: "China"

    }, {
        photo: "https://upload.wikimedia.org/wikipedia/commons/4/48/Silverstone_circuit.svg",
        url: "http://en.wikipedia.org/wiki/Silverstone_Circuit",
        circuitName: "Silverstone Circuit",
        lat: "52.0786",
        long: "-1.01694",
        locality: "Silverstone",
        country: "UK"

    }, {
        photo: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Circuit_Sochi.svg",
        url: "http://en.wikipedia.org/wiki/Sochi_Autodrom",
        circuitName: "Sochi Autodrom",
        lat: "43.4057",
        long: "39.9578",
        locality: "Sochi",
        country: "Russia"

    }, {
        photo: "https://upload.wikimedia.org/wikipedia/commons/5/54/Spa-Francorchamps_of_Belgium.svg",
        url: "http://en.wikipedia.org/wiki/Circuit_de_Spa-Francorchamps",
        circuitName: "Circuit de Spa-Francorchamps",
        lat: "50.4372",
        long: "5.97139",
        locality: "Spa",
        country: "Belgium"

    }, {
        photo: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Suzuka_circuit_map--2005.svg",
        url: "http://en.wikipedia.org/wiki/Suzuka_Circuit",
        circuitName: "Suzuka Circuit",
        lat: "34.8431",
        long: "136.541",
        locality: "Suzuka",
        country: "Japan"

    }, {
        photo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Circuit_Gilles_Villeneuve.svg",
        url: "http://en.wikipedia.org/wiki/Circuit_Gilles_Villeneuve",
        circuitName: "Circuit Gilles Villeneuve",
        lat: "45.5",
        long: "-73.5228",
        locality: "Montreal",
        country: "Canada"

    }, {
        photo: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Circuit_Yas-Island.svg",
        url: "http://en.wikipedia.org/wiki/Yas_Marina_Circuit",
        circuitName: "Yas Marina Circuit",
        lat: "24.4672",
        long: "54.6031",
        locality: "Abu Dhabi",
        country: "UAE"

    }

]


const constructor = [





]




Pilot
    .create(pilots)
    .then(allthePilots => {
        console.log(`Created ${allthePilots.length} pilot`)

    })
    .catch(err => console.log('There was an error creating the pilots', err))

Circuit
    .create(pilots)
    .then(alltheCircuits => {
        console.log(`Created ${alltheCircuits.length} circuit`)
        mongoose.connection.close();
    })
    .catch(err => console.log('There was an error creating the circuits', err))