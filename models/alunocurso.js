module.exports = (sequelize, DataTypes) => {
  const AlunoCurso = sequelize.define('AlunoCurso', {
    AlunoId: DataTypes.INTEGER,
    CursoId: DataTypes.INTEGER
  });

  return AlunoCurso;
};