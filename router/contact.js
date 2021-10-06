const express = require("express");
const router = express.Router();
const {
  addContact,
  searchContact,
  calledMaryContact,
  likeBurritosContact,
  deleteOneContact,
  editOneContact,
  getAllContact,
} = require("../controllers/contact.controllers");

//test db
router.use("/test", (req, res) => {
  res.send("test api");
});

//CRUD
//add contact to db
router.post("/", addContact);
//get all contacts
router.get("/", getAllContact);
//find people who like burrittos. sort them by name, limit the results to two documents, and hide their age
router.get("/food", likeBurritosContact);
//find one contact
router.get("/:id", searchContact);
//find people called Mary and remove them
router.delete("/deletename/:name", calledMaryContact);
//delete one contact
router.delete("/:id", deleteOneContact);
//update contact
router.put("/:id", editOneContact);

module.exports = router;
