const express = require('express');

const app = express();

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('deliveryAddresses.db');

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.get('/menus', (req, res) => {
  res.json([
    {
      "id": 1,
      "name": "Falafel",
      "description": "Avec pouce d'épinard, sauce tahini.",
      "picture": "http://www.delonghi.com/Global/recipes/multifry/195.jpg",
      "price": 14.50,
      "quantity": 1,
    },
    {
      "id": 2,
      "name": "Saucisse tocomen",
      "description": "Saucisse type toulouse, menthe, coriandre.",
      "picture": "https://cac.img.pmdstatic.net/fit/http.3A.2F.2Fwww.2Ecuisineactuelle.2Efr.2Fvar.2Fcui.2Fstorage.2Fimages.2Frecettes-de-cuisine.2Faperitif.2Famuse-bouches.2Fsaucisse-au-four-282817.2F3647205-1-fre-FR.2Fsaucisse-au-four.2Ejpg/748x372/quality/80/crop-from/center/saucisse-au-four.jpeg",
      "price": 16.90,
      "quantity": 1,
    },
    {
      "id": 3,
      "name": "Thon saku mi-cuit",
      "description": "Thon albacure mi-cuit cuisiné maison.",
      "picture": "http://www.gillespudlowski.com/wp-content/uploads/2011/06/Saku_de_Thon_mi-cuit_Tokyo.jpg",
      "price": 18.90,
      "quantity": 1,
    },
    {
      "id": 4,
      "name": "Poke bowl du KB",
      "description": "Thon & saumon mariné, avocat, mangue.",
      "picture": "https://media-cdn.tripadvisor.com/media/photo-s/0e/9c/ad/42/saumon-marine-a-la-minute.jpg",
      "price": 5.95,
      "quantity": 1,
    },
    {
      "id": 5,
      "name": "Burger du KB",
      "description": "Burger maison au pastrami de veau.",
      "picture": "https://www.seriouseats.com/recipes/images/20100806-pastrami-burger-primary.jpg",
      "price": 18.50,
      "quantity": 1,
    },
    {
      "id": 6,
      "name": "Bavure de boeuf angus",
      "description": "Et pommes de terre fondantes faites maison.",
      "picture": "https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fwww.2Efemmeactuelle.2Efr.2Fvar.2Ffemmeactuelle.2Fstorage.2Fimages.2Fcuisine.2Frecettes.2Fplat.2Fboeuf-bourguignon-13923.2F14708189-1-fre-FR.2Fboeuf-bourguignon.2Ejpg/734x367/crop-from/center/quality/80/boeuf-bourguignon.jpg",
      "price": 17.90,
      "quantity": 1,
    },
    {
      "id": 7,
      "name": "Salade du KB 2018",
      "description": "Pastrami de dinde, parmesan, roquette.",
      "picture": "http://www.foodreporter.fr/upload/original/2/g/b/o/u/215397.jpg",
      "price": 17.90,
      "quantity": 1,
    },
  ]);
});

app.get('/avis', (req, res) => {
  res.json([
    {
      "id": 1,
      "avis": "Très Très bon restaurant",
    }
  ])
});

app.get('/deliveryData', (req, res) => {
  db.all('SELECT * FROM client_addresses', (err, rows) => {
    console.log(rows);
    const deliveryData = rows;
    console.log(deliveryData);
    res.json(deliveryData);
  });
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.post('/deliveryData', (req, res) => {
  console.log(req.body);
  // on a reçu l'objet des données (req.body)
  // on insère les data dans la base de données
  // TODO: ...
  // res.send({});
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);