const userRepository = require('../repositories/userRepository');
const bcrypt = require('bcrypt');

const userService = {
    getAllUsers: async () => {
        return await userRepository.getAll();
    },

    getUserByAlias: async (alias) => {
        const user = await userRepository.getByAlias(alias);
        if (!user) {
            throw { status: 404, message: 'Usuario no encontrado (404).' };
        }
        return user;
    },

    registerUser: async (username_alias, password) => {
        if (!username_alias || !password) {
            throw { status: 400, message: 'El alias y la contraseña son obligatorios.' };
        }

        const exists = await userRepository.checkIfExists(username_alias);
        if (exists) {
            throw { status: 409, message: 'Este nombre de usuario ya está en uso.' };
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        return await userRepository.create(username_alias, hashedPassword);
    },

    getUserGroups: async (alias) => {
        return await userRepository.getGroupsByAlias(alias);
    }
};

module.exports = userService;