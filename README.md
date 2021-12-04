# Sweet Ice

## Qué es
Sweet Ice es un negocio de venta de postres helados como bolis, sabalitos y paletas. Cuentan con una gran variedad de sabores y se encargan tanto de pedidos grandes para fiestas, como pedidos individuales. Esta página, creada utilizando el stack conocido como MERN (MongoDB, ExpressJS, React, NodeJS), sirve como "showroom" de los productos de la página. Es decir, no es una página de venta sino que cumple la funcionalidad de crear una manera fácil de ver los productos.

También cuenta con un dashboard panel para que los administradores puedan agregar, editar, actualizar o borrar productos.

## Cómo correrlo

Para correr localmente nuestra página, como prerequisito, se debe de tener el puerto 9000 abierto o bien configurar un puerto a través de las variables de ambiente (PORT). Asimismo se deben de preparar las variables de ambiente MONGO_URI y SECRET.

* Para correr se deben primero instalar las dependencias para frontend y para backend

``` bash
cd frontend
npm i
cd ..
npm i
```

``` bash
cd frontend
npm run build
cd ..
npm test o npm start
```