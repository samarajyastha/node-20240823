import fs from "fs";
import path from "path";
import url from "url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rawData = fs.readFileSync(
  `${__dirname}/../../data/products.json`,
  "utf8"
);

const products = JSON.parse(rawData);

const getAllProducts = (req, res) => {
  res.json(products);
};

const getProductById = (req, res) => {
  const id = req.params.id;

  const product = products.find((item) => item.id == id);

  if (!product) res.status(404).send("Product not found!");

  res.json(product);
};

const addProduct = (req, res) => {
  const newProduct = req.body;

  products.push(newProduct);

  fs.writeFileSync(
    `${__dirname}/../../data/products.json`,
    JSON.stringify(products)
  );

  res.status(201).json(newProduct);
};

export { getAllProducts, getProductById, addProduct };
