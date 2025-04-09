const express = require("express");
const path = require("path");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const alunoRouter = require("./routes/alunos");
const professorRouter = require("./routes/professores");
const integrantesRouter = require("./routes/integrantes");

app.use("/alunos", alunoRouter);
app.use("/professores", professorRouter);
app.use("/integrantes", integrantesRouter);


const indexRouter = require("./routes/index");
const categoriaRouter = require("./routes/categorias");

app.use("/", indexRouter);
app.use("/categorias", categoriaRouter);

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
