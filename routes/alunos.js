const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", async (req, res) => {
  const alunos = await db.Aluno.findAll({
    include: db.Curso // trazer também os cursos que o aluno faz
  });
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

// Matricular aluno em curso
router.get("/:id/cursos", async (req, res) => {
  const aluno = await db.Aluno.findByPk(req.params.id);
  const cursos = await db.Curso.findAll();
  res.render("base", { title: "Matricular Aluno", view: "alunos/cursos", aluno, cursos });
});

router.post("/:id/cursos", async (req, res) => {
  const aluno = await db.Aluno.findByPk(req.params.id);
  await aluno.addCurso(req.body.cursoId);
  res.redirect("/alunos");
});

module.exports = router;
