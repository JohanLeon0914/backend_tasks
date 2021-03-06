const express = require('express');
const TaskController = require('../controllers/TaskController');

const router = express.Router();

router.get('/tasks', TaskController.index);
router.get('/create/', TaskController.create);
router.post('/create/:idProyecto', TaskController.store);
router.post('/tasks/delete/:id', TaskController.destroy);
router.get('/tasks/edit/:id', TaskController.edit);
router.post('/tasks/edit/:id', TaskController.update);
router.get('/tasks/estado/:id', TaskController.editEstado);
router.post('/tasks/estado/:id', TaskController.updateEstado);

module.exports = router;