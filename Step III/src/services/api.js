const BASE_URL = 'http://localhost:3000/api/users';

export const api = {
    getAllUsers: async () => {
        const response = await fetch(BASE_URL);
        if (!response.ok) {
            throw new Error('Error al obtener los usuarios de la base de datos.');
        }
        return await response.json();
    },

    registerUser: async (username_alias, password) => {
        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username_alias, password })
        });

        if (!response.ok) {
            const errData = await response.json();
            throw new Error(errData.error || 'Error al crear usuario.');
        }
        return await response.json();
    }
};