# Instrucciones para usar este repo

1. Descargar el repo con git clone.
2. Ir con una terminal a la carpeta del repo.
3. Descargar las dependencias con el comando:

```sh
npm install
```

**Explicacion**

npm es el gestor de paquetes de node js como si subiesemos todo el codigo el repo seria muy pesado al ejecutar npm install se nos genera un archivo package.json donde apunta las dependencias con la version que usan. Por eso al descargar el codigo nos faltara la carpeta node_modules que es la que contiene todos los modulos de node.js. Para generar esta carpeta solo tendremos que instalar las dependencias con `npm install`. Al ejecutar el comando npm leera el archivo package.json e instalara las dependencias que hay apuntadas con las versiones.
