const express = require("express");
const db = require("./database");
const app = express();
const port = 7007;
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

//set access post
app.use(express.json());
app.listen(port, () => {
  console.log(`RUN http://localhost:${port}`);
});

app.get("/", function (req, res) {
  res.send("Hello World!");
});

// DROP table if exists, then CREATE
const qrop_item = "DROP TABLE IF EXISTS Item";
const creat_item =
  "create table ITEM (ID int auto_increment primary key, NAME varchar(255), DESCRIPTION varchar(255), AVAILABLE_QUANTITY int, UNIT_PRICE double)";

// INSERT default data

const item_add1 =
  "INSERT INTO ITEM (NAME, AVAILABLE_QUANTITY) VALUES ('Naruto Hoodie', 10)";
const item_add2 =
  "INSERT INTO ITEM (NAME, AVAILABLE_QUANTITY) VALUES ('Gaara Hoodie', 20)";

app.get("/get_item", function (req, res) {
  db.query(qrop_item);
  db.query(creat_item);
  db.query(item_add1);
  db.query(item_add2);
  const result = db.query("select * from Item");
  return res.send(result);
});

// DROP table if exists, then CREATE
const drop_orderProcessing = "DROP TABLE IF EXISTS Order_Processing";
const create_orderProcessing =
  "CREATE TABLE Order_Processing ( \
    Id int NOT NULL AUTO_INCREMENT, \
    Item varchar(255), \
    quantity int, \
    PRIMARY KEY (Id) );";

// INSERT default data

const order1 =
  "INSERT INTO Order_Processing (Item, quantity) VALUES ('Naruto Hoodie', 100)";
const order2 =
  "INSERT INTO Order_Processing (Item, quantity) VALUES ('Gaara Hoodie', 200)";

app.get("/get_orderProcessing", function (req, res) {
  db.query(drop_orderProcessing);
  db.query(create_orderProcessing);
  db.query(order1);
  db.query(order2);
  const result = db.query("select * from Order_Processing");
  return res.send(result);
});

// DROP table if exists, then CREATE
const drop_inventory = "DROP TABLE IF EXISTS Inventory";
const create_inventory =
  "CREATE TABLE Inventory ( \
    Id int NOT NULL AUTO_INCREMENT, \
    Item varchar(255), \
    quantity int, \
    PRIMARY KEY (Id) );";

// INSERT default data

const inventory1 =
  "INSERT INTO Inventory (Item, quantity) VALUES ('Naruto Hoodie', 10000)";
const inventory2 =
  "INSERT INTO Inventory (Item, quantity) VALUES ('Gaara Hoodie', 20000)";

app.get("/get_inventory", function (req, res) {
  db.query(drop_inventory);
  db.query(create_inventory);
  db.query(inventory1);
  db.query(inventory2);
  const result = db.query("select * from Inventory");
  return res.send(result);
});
app.post("/update_quantity", function (req, res) {
  var IDs = req.body.names;
  var quantity = req.body.quantity;

  IDs.forEach((id_, index) => {
    const quan = quantity[index];
    const result1 = db.query(
      `UPDATE Item SET quantity = ${quan} WHERE Id = ${id_};`
    );
  });

  return res.send("");
});
