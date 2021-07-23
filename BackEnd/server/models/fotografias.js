//'use strict'; // LE PONGO DE MANERA TEMPORAL

module.exports=(sequelize,DataTypes)=>{

    const fotografias=sequelize.define('fotografias',{
        id: {
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true            
        },        
        fotografia:DataTypes.STRING,
        descripcion:DataTypes.STRING,
        imagen:DataTypes.STRING,
        numero:DataTypes.INTEGER,
        autor:DataTypes.STRING,
        activo:DataTypes.BOOLEAN,
        usuario_creacion:DataTypes.STRING
    
    });

    return fotografias;

}