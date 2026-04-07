## Stack Tecnológico Usado
* **Base de datos:** PostgreSQL
* **Backend:** Node.js, Express, pg (node-postgres), bcrypt
* **Frontend:** React, Vite, Tailwind CSS

## Instrucciones de Ejecución

### Prerrequisitos
* Node.js (v18 o superior)
* Postgre SQL instalado y corriendo localmente

### Step I: Base de Datos
1. Abrir pgAdmin o la consola 'psql'
2. Crear una base de datos nueva
3. Ejecutar los scripts SQL adjuntos en la carpeta 'Step I' en el orden:
   * `01_create_schema.sql` (Estructura, tablas y relaciones).
   * `02_access_levels.sql` (Niveles de acceso y grupos de seguridad base).
   * `03_mock_data.sql` (Carga de usuarios e información de prueba).
   * `04_queries.sql` (Opcional: para validar las consultas de prueba).
  
### Step II: Backend
1. Abrir una terminal y navegar a la carpeta del backend
2. Instalar las dependencias:
   npm install
3. Renombrar archivo de entorno de ejemplo:
   * En Windows (CMD): `copy .env.example .env`
   * En Mac/Linux/Git Bash: `cp .env.example .env`
4. Abrir el archivo .env y completar las credenciales de tu BD local (usuario, contraseña, nombre de la BD)
5. Levantar el servidor: `npm run dev`

### Step III: Frontend
1. Abrir una nueva terminal y navegar a carpeta del frontend 'Step III'
2. Instalar las dependencias: `npm install`
3. Levantar la interfaz: `npm run dev`
