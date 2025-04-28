module.exports = (sequelize, DataTypes) => {
  const Professor = sequelize.define('Professor', {
    nome: DataTypes.STRING
  });

  Professor.associate = (models) => {
    Professor.hasMany(models.Curso);
  };

  return Professor;
};