const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// 1. servicio para recuperar usuarios registrados
// GET /api/users 
router.get('/', userController.getAllUsers);

// 3. servicio para registrar usuaarios
// POST /api/users
router.post('/', userController.registerUser);

// 2. servicio para recuperar información de un usuario dado su alias
// GET /api/users/rodrigo.admin
router.get('/:alias', userController.getUserByAlias);

// 4. servicio para recuperar los grupos de seguridad dado su alias
// GET /api/users/rodrigo.admin/groups
router.get('/:alias/groups', userController.getUserGroups);

module.exports = router;