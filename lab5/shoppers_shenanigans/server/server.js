const express = require("express");
const db = require("./database");
const app = express();
const port = 7000;
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
const drop_item = "DROP TABLE IF EXISTS Item";
const creat_item =
  "CREATE TABLE Item ( \
    Id int NOT NULL AUTO_INCREMENT, \
    Item varchar(255), \
    quantity int, \
    PRIMARY KEY (Id) );";

const drop_inventory = "DROP TABLE IF EXISTS Inventory";
const create_inventory =
  "CREATE TABLE Invetory ( \
    Id int NOT NULL AUTO_INCREMENT, \
    ProductName varchar(255), \
    Quantity int, \
    PRIMARY KEY (Id) );";

const drop_order_processing = "DROP TABLE IF EXISTS OrderProcessing";
const create_order_processing =
  "CREATE TABLE OrderProcessing ( \
    Order Id int NOT NULL AUTO_INCREMENT, \
    ProductName varchar(255), \
    ProductQuantity int, \
    PRIMARY KEY (Order Id) );";
// INSERT default data
//________Prithviraj:  I think this maybe conflicting with the Purchase page dialog box numbers, hence the bug we found while running it today. _____Please Confirm :/
const item_add1 = "INSERT INTO Item (Item, quantity) VALUES ('product 1', 10)";
const item_add2 = "INSERT INTO Item (Item, quantity) VALUES ('product 2', 20)";

const inventory_add1 =
  "INSERT INTO Invetory (ProductName, Quantity) VALUES ('product 1', 10)";
const inventory_add2 =
  "INSERT INTO Invetory (ProductName, Quantity) VALUES ('product 2', 20)";

const order_processing_add1 =
  "INSERT INTO OrderProcessing (ProductName, ProductQuantity) VALUES ('product 1', 10)";
const order_processing_add2 =
  "INSERT INTO OrderProcessing (ProductName, ProductQuantity) VALUES ('product 2', 20)";

app.get("/get_item", function (req, res) {
  db.query(drop_item);
  db.query(creat_item);
  db.query(item_add1);
  db.query(item_add2);
  const result = db.query("select * from Item");
  return res.send(result);
});

app.get("/get_inventory", function (req, res) {
  db.query(drop_inventory);
  db.query(create_inventory);
  db.query(inventory_add1);
  db.query(inventory_add2);
  const result = db.query("select * from Inventory");
  return res.send(result);
});

app.get("/get_orderprocessing", function (req, res) {
  db.query(drop_order_processing);
  db.query(create_order_processing);
  db.query(order_processing_add1);
  db.query(order_processing_add2);
  const result = db.query("select * from OrderProcessing");
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
