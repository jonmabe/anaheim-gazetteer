'use strict';

module.exports = function(sequelize, DataTypes) {
  var publication = sequelize.define('publication', {
    name: DataTypes.STRING
  }, {
    tableName: 'publications',
    classMethods: {
      associate: function(models) {
        publication.hasMany(models.edition, { foreignKey: 'publication_id'});
      }
    }
  });
  return publication;
};