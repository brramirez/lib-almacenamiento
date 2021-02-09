# Almacenamiento

  

libreria-almacenamiento es un script para leer y escribir en el localStorage de manera cifrada con el algoritmo AES256.

  

## Instalación

  

```bash

npm install @red-unica/libreria-almacenamiento

```

  

## Uso

  

Cree un archivo .env en el directorio raíz de su proyecto. Agregue la siguiente variable:

```

RED_UNICA_FRASE_SECRETA = "FRASE_SECRETA"

```

  

Importe las funciones necesarias para su proyecto:

```javascript

import { escribirAlmacenamiento, leerAlmacenamiento, limpiarAlmacenamiento } from '@red-unica/libreria-almacenamiento';
  

escribirAlmacenamiento('texto', textoPlano); # almacena en localStorage el texto-plano de manera cifrada
  

const textoPlano = leerAlmacenamiento('texto'); # retorna el texto en su formato original
  

limpiarAlmacenamiento(); # limpia por completo el localStorage

```

  

## License

[MIT](https://choosealicense.com/licenses/mit/)