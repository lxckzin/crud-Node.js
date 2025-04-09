const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", async (req, res) => {
  const professores = await db.Professor.findAll();
  res.render("base", { title: "Professores", view: "professores/show", professores });
});

router.get("/add", (req, res) => {
  res.render("base", { title: "Adicionar Professor", view: "professores/add" });
});

router.post("/add", async (req, res) => {
  await db.Professor.create({ nome: req.body.nome });
  res.redirect("/professores");
});

router.get("/edit/:id", async (req, res) => {
  const professor = await db.Professor.findByPk(req.params.id);
  res.render("base", { title: "Editar Professor", view: "professores/edit", professor });
});

router.post("/edit/:id", async (req, res) => {
  await db.Professor.update({ nome: req.body.nome }, { where: { id: req.params.id } });
  res.redirect("/professores");
});

router.get("/delete/:id", async (req, res) => {
  await db.Professor.destroy({ where: { id: req.params.id } });
  res.redirect("/professores");
});

module.exports = router;
