const userService = require('../services/userService');

const userController = {
    getAllUsers: async (req, res) => {
        try {
            const users = await userService.getAllUsers();
            res.status(200).json(users);
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
            res.status(500).json({ error: 'Error interno del servidor (500).' });
        }
    },

    getUserByAlias: async (req, res) => {
        try {
            const user = await userService.getUserByAlias(req.params.alias);
            res.status(200).json(user);
        } catch (error) {
            // Si el error trae un status (ej. el 404 del servicio), lo usamos. Si no, es un 500.
            if (error.status) return res.status(error.status).json({ error: error.message });
            
            console.error('Error al obtener usuario:', error);
            res.status(500).json({ error: 'Error interno del servidor (500).' });
        }
    },

    registerUser: async (req, res) => {
        try {
            const { username_alias, password } = req.body;
            const newUser = await userService.registerUser(username_alias, password);
            
            res.status(201).json({
                message: 'Usuario registrado exitosamente.',
                user: newUser
            });
        } catch (error) {
            if (error.status) return res.status(error.status).json({ error: error.message });
            
            console.error('Error al registrar usuario:', error);
            res.status(500).json({ error: 'Error interno del servidor (500).' });
        }
    },

    getUserGroups: async (req, res) => {
        try {
            const groups = await userService.getUserGroups(req.params.alias);
            res.status(200).json(groups);
        } catch (error) {
            console.error('Error al obtener los grupos del usuario:', error);
            res.status(500).json({ error: 'Error interno del servidor (500).' });
        }
    }
};

module.exports = userController;