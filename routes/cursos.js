const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", async (req, res) => {
  try {
    const cursos = await db.Curso.findAll({ include: db.Professor });
    res.render("base", { title: "Cursos", view: "cursos/show", cursos });
  } catch (error) {
    console.error("ERRO AO CARREGAR CURSOS:", error);
    res.status(500).send("Erro ao carregar cursos.");
  }
});

router.get("/add", async (req, res) => {
  try {
    const professores = await db.Professor.findAll();
    res.render("base", { title: "Adicionar Curso", view: "cursos/add", professores });
  } catch (error) {
    res.status(500).send("Erro ao carregar professores.");
  }
});

router.post("/add", async (req, res) => {
  try {
    await db.Curso.create({ nome: req.body.nome, ProfessorId: req.body.professorId });
    res.redirect("/cursos");
  } catch (error) {
    res.status(500).send("Erro ao salvar curso.");
  }
});

module.exports = router;