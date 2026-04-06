SELECT 
    u.username_alias AS "Alias de usuario",
    g.group_name AS "Grupo de seguridad", 
    a.name AS "Nivel de acceso",
    u.is_active AS "Estado activo"
FROM 
    Users_Base u
JOIN 
    User_Security us ON u.user_id = us.user_id
JOIN 
    Security_Groups g ON us.group_id = g.group_id
JOIN 
    Access_Level a ON us.level_id = a.level_id
ORDER BY 
    u.username_alias ASC, 
    g.group_name ASC; 