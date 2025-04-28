module.exports = (sequelize, DataTypes) => {
  const Curso = sequelize.define('Curso', {
    nome: DataTypes.STRING
  });

  Curso.associate = (models) => {
    Curso.belongsToMany(models.Aluno, { through: 'AlunoCurso' });
    Curso.belongsTo(models.Professor);
  };

  return Curso;
};