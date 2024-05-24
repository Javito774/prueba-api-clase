const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post('/login', (req, res) => {
  const {email, password} = req.body;

  // buscar en base de datos el usuario con email del body.
  //
  // Si no existe el usuario en base de datos devolver error: Usuario o contraseña incorrectos.
  // 
  // Si existe comprobar que la contraseña enviada es igual a la contraseña guardad en bases de datos
  //
  // Si no es igual -> devolver error: Usuario o contraseña incorrectos.
  //
  // Si si es igual -> crear un token para el usuario.
  //

  let emailDevueltoPorDB = 'javito774@gmail.com';
  let passDevueltaPorDB = '1234';

  if (email == emailDevueltoPorDB && password == passDevueltaPorDB) {
    const payload = {
      userId: 357,
      username: "javier",
      email: email,
      rol: "admin"
    }

    const claveParaCifrar = "claveSuperSecreta1235";

    const options = {
      expiresIn: '1h'
    }

    const token = jwt.sign(payload, claveParaCifrar, options);

    res.json({token: token});
  } else {
    res.status(401).send('Usuario o contraseña incorrectos');
  }
})


app.get('/admin', comprobarToken, (req, res) => {
  console.log('Aqui ya hago las cosas de admin');
  res.send('Bienvenido admin');
})

app.post('/canciones', comprobarToken, (req, res) => {
  res.status(201).send('Has creado una nueva cancion');
});

app.get('/canciones', (req, res) => {
  res.send('Toma las canciones');
});


function comprobarToken(req, res, next) {
  const bearerToken = req.headers.authorization;
  if (bearerToken) {
    console.log(bearerToken);
    const token = bearerToken.split(' ')[1];
    const claveParaCifrar = "claveSuperSecreta1235";
    try {
      const decoded = jwt.verify(token, claveParaCifrar);
      req.token = decoded;
      next();
    } catch (err) {
      res.status(401).send('Hey tu token no es valido');
    }
  } else {
    res.status(403).send('Hey necesitas tu token para entrar aqui');
  }
}


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
