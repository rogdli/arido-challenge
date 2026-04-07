const express = require('express');
const cors = require('cors');
const errorHandler = require('./middlewares/errorHandler');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => 
{
    res.status(200).json({ message: 'API funcionando correctamente.'})
});

app.use('/api/users', require('./routes/userRoutes'));

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en  http://localhost:${PORT}.`);
})