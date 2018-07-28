const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('deliveryAddresses.db');


db.serialize(() => {

    db.run("CREATE TABLE client_addresses (name TEXT, address TEXT, telephone TEXT, addressComplement TEXT)");
    db.run("INSERT INTO client_addresses VALUES ('Mark', '5 rue jean phillipe digbeu', '0656120322', '1er étage')");

    console.log('successfully created the client_address table in deliveryAddresses.db');

    db.each("SELECT name, address, telephone, addressComplement FROM client_addresses", (err, row) => {
        console.log(row.name + ": " + row.address + " - " + row.telephone + " - " + row.addressComplement);
    });
});