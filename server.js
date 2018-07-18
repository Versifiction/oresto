const express = require('express');

const app = express();

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
      "id": "1",
      "name": "Falafel",
      "description": "Avec pouce d'épinard, sauce tahini.",
      "picture": "http://singleapp.com//images/menu_items/51961_mediterranean_spinach_cheese_dip_thumb.jpg",
      "price": 14.50,
      "quantity": 1,
    },
    {
      "id": "2",
      "name": "Saucisse tocomen",
      "description": "Saucisse type toulouse, menthe, coriandre.",
      "picture": "http://singleapp.com//images/menu_items/51961_mediterranean_spinach_cheese_dip_thumb.jpg",
      "price": 16.90,
      "quantity": 1,
    },
    {
      "id": "3",
      "name": "Thon saku mi-cuit",
      "description": "Thon albacure mi-cuit cuisiné maison.",
      "picture": "http://singleapp.com//images/menu_items/51961_mediterranean_spinach_cheese_dip_thumb.jpg",
      "price": 18.90,
      "quantity": 1,
    },
    {
      "id": "4",
      "name": "Poke bowl du KB",
      "description": "Thon & saumon mariné, avocat, mangue.",
      "picture": "http://singleapp.com//images/menu_items/51961_mediterranean_spinach_cheese_dip_thumb.jpg",
      "price": 5.95,
      "quantity": 1,
    },
    {
      "id": "5",
      "name": "Burger du KB",
      "description": "Burger maison au pastrami de veau.",
      "picture": "http://singleapp.com//images/menu_items/51961_mediterranean_spinach_cheese_dip_thumb.jpg",
      "price": 18.50,
      "quantity": 1,
    },
    {
      "id": "6",
      "name": "Bavure de boeuf angus",
      "description": "Et pommes de terre fondantes faites maison.",
      "picture": "http://singleapp.com//images/menu_items/51961_mediterranean_spinach_cheese_dip_thumb.jpg",
      "price": 17.90,
      "quantity": 1,
    },
    {
      "id": "7",
      "name": "Salade du KB 2018",
      "description": "Pastrami de dinde, parmesan, roquette.",
      "picture": "http://singleapp.com//images/menu_items/51961_mediterranean_spinach_cheese_dip_thumb.jpg",
      "price": 17.90,
      "quantity": 1,
    },
  ]);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);