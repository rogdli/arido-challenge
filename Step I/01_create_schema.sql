CREATE TABLE Users_Base (
    user_id SERIAL PRIMARY KEY,
    username_alias VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    is_active BOOLEAN DEFAULT TRUE NOT NULL
);

CREATE TABLE Security_Groups (
    group_id SERIAL PRIMARY KEY,
    group_name VARCHAR(100) UNIQUE NOT NULL,
    description TEXT
);

CREATE TABLE Access_Level (
    level_id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE User_Security (
    user_id INT NOT NULL,
    group_id INT NOT NULL,
    level_id INT NOT NULL,
    PRIMARY KEY (user_id, group_id),
    FOREIGN KEY (user_id) REFERENCES Users_Base(user_id) ON DELETE CASCADE,
    FOREIGN KEY (group_id) REFERENCES Security_Groups(group_id) ON DELETE CASCADE,
    FOREIGN KEY (level_id) REFERENCES Access_Level(level_id) ON DELETE RESTRICT
);

-- índice B-Tree para acelerar las búsquedas por alias en el hipotético caso de que hubiera muchísimas filas
CREATE INDEX idx_username_alias ON Users_Base(username_alias);