INSERT INTO Users_Base (username_alias, password) VALUES 
    ('rodrigo.admin', 'hash_fuerte_123'), 
    ('juan.operador', 'hash_fuerte_456'), 
    ('ana.auditora', 'hash_fuerte_789');

INSERT INTO Security_Groups (group_name, description) VALUES 
    ('Planta de Ensamblaje A', 'Control operativo de la línea principal de manufactura'),
    ('Depósito Central', 'Gestión de stock, entrada y salida de materiales'),
    ('Gerencia de Sistemas', 'Acceso global y auditoría de software');

INSERT INTO User_Security (user_id, group_id, level_id) VALUES 
    -- rodrigo.admin es Owner en Sistemas y Read en el Depósito
    (1, 3, 4), 
    (1, 2, 1), 
    
    -- carlos.operador puede escribir en Planta pero solo leer en Depósito
    (2, 1, 2), 
    (2, 2, 1), 
    
    -- ana.auditora administra el depósito pero solo lee la planta
    (3, 2, 3), 
    (3, 1, 1);