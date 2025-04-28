const express = require("express");
const path = require("path");
const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Configurações de View
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Rotas
const indexRouter = require("./routes/index");
const categoriaRouter = require("./routes/categorias");
const alunoRouter = require("./routes/alunos");
const professorRouter = require("./routes/professores");
const cursoRouter = require("./routes/cursos");
const integrantesRouter = require("./routes/integrantes");

app.use("/", indexRouter);
app.use("/categorias", categoriaRouter);
app.use("/alunos", alunoRouter);
app.use("/professores", professorRouter);
app.use("/cursos", cursoRouter);
app.use("/integrantes", integrantesRouter);

// Iniciar servidor
app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
