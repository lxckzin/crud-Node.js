const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", async (req, res) => {
  const alunos = await db.Aluno.findAll();
  res.render("base", { title: "Alunos", view: "alunos/show", alunos });
});

router.get("/add", (req, res) => {
  res.render("base", { title: "Adicionar Aluno", view: "alunos/add" });
});

router.post("/add", async (req, res) => {
  await db.Aluno.create({ nome: req.body.nome });
  res.redirect("/alunos");
});

router.get("/edit/:id", async (req, res) => {
  const aluno = await db.Aluno.findByPk(req.params.id);
  res.render("base", { title: "Editar Aluno", view: "alunos/edit", aluno });
});

router.post("/edit/:id", async (req, res) => {
  await db.Aluno.update({ nome: req.body.nome }, { where: { id: req.params.id } });
  res.redirect("/alunos");
});

router.get("/delete/:id", async (req, res) => {
  await db.Aluno.destroy({ where: { id: req.params.id } });
  res.redirect("/alunos");
});

module.exports = router;
