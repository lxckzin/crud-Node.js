const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", async (req, res) => {
  const categorias = await db.Categoria.findAll();
  res.render("base", { title: "Categorias", view: "categorias/show", categorias });
});

router.get("/add", (req, res) => {
  res.render("base", { title: "Adicionar Categoria", view: "categorias/add" });
});

router.post("/add", async (req, res) => {
  await db.Categoria.create({ nome: req.body.nome });
  res.redirect("/categorias");
});

router.get("/edit/:id", async (req, res) => {
  const categoria = await db.Categoria.findByPk(req.params.id);
  res.render("base", { title: "Editar Categoria", view: "categorias/edit", categoria });
});

router.post("/edit/:id", async (req, res) => {
  await db.Categoria.update({ nome: req.body.nome }, { where: { id: req.params.id } });
  res.redirect("/categorias");
});

router.get("/delete/:id", async (req, res) => {
  await db.Categoria.destroy({ where: { id: req.params.id } });
  res.redirect("/categorias");
});

module.exports = router;
