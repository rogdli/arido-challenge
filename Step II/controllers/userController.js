const userService = require('../services/userService');

const userController = {
    getAllUsers: async (req, res, next) => {
        try {
            const users = await userService.getAllUsers();
            res.status(200).json(users);
        } catch (error) {
            next(error);
        }
    },

    getUserByAlias: async (req, res, next) => {
        try {
            const user = await userService.getUserByAlias(req.params.alias);
            res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    },

    registerUser: async (req, res, next) => {
        try {
            const { username_alias, password } = req.body;
            const newUser = await userService.registerUser(username_alias, password);
            
            res.status(201).json({
                message: 'Usuario registrado exitosamente.',
                user: newUser
            });
        } catch (error) {
            next(error);
        }
    },

    getUserGroups: async (req, res, next) => {
        try {
            const groups = await userService.getUserGroups(req.params.alias);
            res.status(200).json(groups);
        } catch (error) {
            next(error);
        }
    }
};

module.exports = userController;