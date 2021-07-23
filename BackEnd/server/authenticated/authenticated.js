var nJwt=require('njwt');
var config=require('../config/config.json');
var secret=config.token_secret;

function auth(req,res,next){
    if(!req.headers.authorization){
        return res.status(403).send({message:"La peticion no tiene la cabecera de autenticación."});
    }
    
    var token=req.headers.authorization.replace(/['"]+/g,''); //reemplazar caracteres por vacio
    var payload=nJwt.verify(token,secret,(err,verifiedJwt)=>{
        if(err){
            return res.status(401).send({message:"Acceso no autorizado."});
        }else{
            next();
        }
    })

}

module.exports={
    auth
}