
const fotografiasController=require('../controllers').fotografias;
const md_auth=require('../authenticated/authenticated');
const cm=require('connect-multiparty');
const md_upload=cm({uploadDir:'./server/uploads/fotografias'});

module.exports=(app)=>{
    app.post('/api/fotografia',md_auth.auth, fotografiasController.create);
    app.put('/api/fotografia/:id',md_auth.auth, fotografiasController.update); // le pasamos el parametro id en este punto
    app.post('/api/upload-fotografia/:id',[md_auth.auth,md_upload], fotografiasController.uploadFotografia);
    app.get('/api/get-fotografia/:fotografia/:thumb',fotografiasController.getFotografia);
    app.get('/api/fotografias',fotografiasController.getAll);
    app.get('/api/fotografias-admin',fotografiasController.getAllAdmin);
}