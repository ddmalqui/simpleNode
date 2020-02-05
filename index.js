const express = require('express');
const app = express();

app.get('/', (req,res) => res.send('Hola Julian'));

app.listen(3000);
console.log('servidor en el puerto', 3000)