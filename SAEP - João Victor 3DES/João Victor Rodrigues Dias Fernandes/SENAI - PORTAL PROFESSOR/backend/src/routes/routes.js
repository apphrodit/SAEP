const express = require("express");
const router = express.Router();

const Professor = require('../controllers/professor');
const Atividades = require('../controllers/atividades');
const Turmas = require('../controllers/turmas');

router.post('/professor/criar', Professor.criar);
router.get('/professor/listar', Professor.listar);
router.get('/professor/listar/:id', Professor.listar);
router.put('/professor/alterar', Professor.alterar);
router.delete('/professor/excluir', Professor.excluir);

router.post('/atividades/criar', Atividades.criar);
router.get('/atividades/listar', Atividades.listar);
router.get('/atividades/listar/:id', Atividades.listar);
router.put('/atividades/alterar', Atividades.alterar);
router.delete('/atividades/excluir', Atividades.excluir);

router.post('/turmas/criar', Turmas.criar);
router.get('/turmas/listar', Turmas.listar);
router.get('/turmas/listar/:id', Turmas.listar);
router.put('/turmas/alterar', Turmas.alterar);
router.delete('/turmas/excluir', Turmas.excluir);


module.exports = router;