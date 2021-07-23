'use strict'; // LE PONGO DE MANERA TEMPORAL

module.exports=(sequelize,DataTypes)=>{

    const usuarios=sequelize.define('usuarios',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        
        },
        usuario:DataTypes.STRING,
        password:DataTypes.STRING,
        id_rol:DataTypes.INTEGER,
        activo:DataTypes.BOOLEAN,
        usuario_creacion:DataTypes.STRING,
        createdAt:DataTypes.DATE,
        updatedAt:DataTypes.DATE
    });

    return usuarios;

}