const con = require("../dao/connect");
const Professor = require("../models/professor")

const criar = (req,res) =>{
    let professor = new Professor(req.body)
    con.query(professor.create(),(err,result) => {
        if(err == null)
            res.status(201).end()
        else
            res.status(505).json(err).end()
    })
}

const listar = (req, res) => {
    let professor = new Professor(req.params)
    con.query(professor.read(), (err, result) =>{
        if(err == null)
            res.status(200).json(result).end()
        else
            res.status(505).json(err).end()
    })
}

const alterar = (req,res) => {
    let professor = new Professor(req.body)
    con.query(professor.update(),(err,result) =>{
        if(result.affectedRows > 0)
            res.status(202).end()
        else
            res.status(404).end()
    })
}

const excluir = (req,res) => {
    let professor = new Professor(req.params)
    con.query(professor.delete(), (err,result) => {
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