const pool = require('../config/db');

const userRepository = {
    getAll: async () => {
        const query = 'SELECT user_id, username_alias, created_at, is_active FROM Users_Base ORDER BY user_id ASC';
        const result = await pool.query(query);
        return result.rows;
    },

    getByAlias: async (alias) => {
        const query = 'SELECT user_id, username_alias, created_at, is_active FROM Users_Base WHERE username_alias = $1';
        const result = await pool.query(query, [alias]);
        return result.rows[0]; // retorna el usuario o undefined
    },

    checkIfExists: async (alias) => {
        const query = 'SELECT * FROM Users_Base WHERE username_alias = $1';
        const result = await pool.query(query, [alias]);
        return result.rows.length > 0; // retorna true si existe, false si no
    },

    create: async (username_alias, hashedPassword) => {
        const query = `
            INSERT INTO Users_Base (username_alias, password) 
            VALUES ($1, $2) 
            RETURNING user_id, username_alias, created_at, is_active
        `;
        const result = await pool.query(query, [username_alias, hashedPassword]);
        return result.rows[0];
    },

    getGroupsByAlias: async (alias) => {
        const query = `
            SELECT g.group_name, g.description, a.name AS access_level
            FROM Users_Base u
            JOIN User_Security us ON u.user_id = us.user_id
            JOIN Security_Groups g ON us.group_id = g.group_id
            JOIN Access_Level a ON us.level_id = a.level_id
            WHERE u.username_alias = $1
        `;
        const result = await pool.query(query, [alias]);
        return result.rows;
    }
};

module.exports = userRepository;