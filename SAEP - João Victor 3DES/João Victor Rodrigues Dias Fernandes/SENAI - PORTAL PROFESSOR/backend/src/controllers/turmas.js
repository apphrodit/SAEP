const con = require("../dao/connect");
const Turmas = require("../models/turmas");

const criar = (req,res) =>{
    let turmas = new Turmas(req.body)
    con.query(turmas.create(),(err,result) => {
        if(err == null)
            res.status(201).end()
        else
            res.status(505).json(err).end()
    })
}

const listar = (req, res) => {
    let turmas = new Turmas(req.params)
    con.query(turmas.read(), (err, result) =>{
        if(err == null)
            res.status(200).json(result).end()
        else
            res.status(505).json(err).end()
    })
}

const alterar = (req,res) => {
    let turmas = new Turmas(req.body)
    con.query(turmas.update(),(err,result) =>{
        if(result.affectedRows > 0)
            res.status(202).end()
        else
            res.status(404).end()
    })
}

const excluir = (req,res) => {
    let turmas = new Turmas(req.params)
    con.query(turmas.delete(), (err,result) => {
        if(result.affectedRows > 0)
            res.status(202).end()
        else
            res.status(404).end()
    })
}

module.exports = {
    criar,
    listar,
    alterar,
    excluir
}