module.exports = function(sequelize, DataTypes){
    var Member = sequelize.define("Member", {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.STRING,
        type: DataTypes.STRING,
        disabilityType: DataTypes.STRING
    });
    return Member;
}