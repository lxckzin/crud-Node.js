module.exports = (sequelize, DataTypes) => {
  const Aluno = sequelize.define('Aluno', {
    nome: DataTypes.STRING
  });

  Aluno.associate = (models) => {
    Aluno.belongsToMany(models.Curso, { through: 'AlunoCurso' });
  };

  return Aluno;
};