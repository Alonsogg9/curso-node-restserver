const { response, request } = require('express');


const usuariosGet=(req=request, res = response)=>{

        const {nombre, apikey, page=1} = req.query;

        res.json({
            msg:'get API - controlador',
            nombre,
            apikey,
            page
        });
};

const usuariosPost=(req, res=response)=>{
        const {nombre, edad}= req.body;


        res.json({
           msg: 'post World',
           nombre, 
           edad
        });
}

const usuariosPut=(req, res=response)=>{

    const id= req.params.id;

    res.json({
       msg: 'put World',
       id
    });
}


const usuariosDelete=(req, res=response)=>{
    res.json({
       msg: 'delete World'
    });
}



module.exports={
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}