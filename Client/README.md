# Desarrollo de Aplicación Web para Gestión de Usuarios y Foro

img src="./src/assets/img/programate-academy.png" alt="Logo Programate"

## Equipo de Desarrollo

- Luisa María Martínez Ramírez - Scrum Master.
- Marianny Melissa Márquez Camacho - Líder Técnica.
- Gyna Alexandra Herrera Alvarez - Diseño Backend.
- Jasbbleidy Caterine Arenilla Cantillo - Frontend y Pruebas.
- Lina Marcela Caro Cortés - Frontend.
- Sandra Milena Ruiz Lopez - Backend y Desarrollo.
- María Fernanda Valencia Farfán - Diseño y Frontend.

## Introducción

Presentamos el resultado del proyecto de desarrollo web para la biblioteca. Exploramos cómo hemos abordado los requisitos de autenticación, perfiles y foro. Destacamos el trabajo en equipo y las tecnologías utilizadas en este proceso.

## Contexto del Proyecto

Colaboración con la biblioteca para proporcionar una plataforma interactiva. Se requería una aplicación web para mejorar la gestión de usuarios y proporcionar un foro para la comunidad.

## Módulos y Funcionalidades Clave

### Autenticación

- Registro de Usuarios
  - Los usuarios pueden registrarse proporcionando su nombre, correo electrónico y contraseña.
  - Verificaciones de unicidad de correo electrónico y validaciones adecuadas.
- Inicio de Sesión
  - Los usuarios pueden iniciar sesión con su correo electrónico y contraseña.
  - Medidas de seguridad, como encriptación de contraseñas y gestión de tokens.

### Perfiles de Usuarios

- Ver Perfil
  - Los usuarios autenticados pueden ver su propio perfil con nombre y foto.
- Editar Perfil
  - Los usuarios pueden modificar su información, incluyendo la foto de perfil.

### Foro

- Explorar Publicaciones
  - Usuarios, incluso no autenticados, pueden explorar publicaciones recientes.
- Ver Detalles de Publicación
  - Usuarios pueden ver contenido y detalles completos de publicaciones.
- Crear Publicación
  - Usuarios autenticados pueden crear nuevas publicaciones en el foro.
- Eliminar Publicación (Administrador)
  - El administrador puede eliminar publicaciones inapropiadas.

## Interfaz Responsiva

- Acceso desde Dispositivos Móviles
  - Los usuarios pueden acceder a la plataforma desde dispositivos móviles.

## Metodología Scrum

Adopción de la metodología Scrum para una gestión ágil y efectiva. Descripción de los Sprints realizados.

### Autenticación y Usuarios

- **Registrarse:**
  - Método: POST
  - Ruta: `/api/auth/signup`
  - Descripción: Registro de nuevos usuarios.

- **Iniciar Sesión:**
  - Método: POST
  - Ruta: `/api/auth/signin`
  - Descripción: Iniciar sesión de usuarios registrados.

- **Obtener Perfil de Usuario:**
  - Método: GET
  - Ruta: `/api/users/:id`
  - Descripción: Obtener información del perfil de un usuario.

- **Actualizar Perfil de Usuario:**
  - Método: PUT
  - Ruta: `/api/edit/:id`
  - Descripción: Actualizar la información del perfil de un usuario.

### Foro y Publicaciones

- **Obtener Todas las Publicaciones:**
  - Método: GET
  - Ruta: `/api/posts`
  - Descripción: Obtener una lista de todas las publicaciones en el foro.

- **Obtener Detalles de Publicación:**
  - Método: GET
  - Ruta: `/api/posts/:id`
  - Descripción: Obtener detalles completos de una publicación específica.

- **Crear Nueva Publicación:**
  - Método: POST
  - Ruta: `/api/posts/create`
  - Descripción: Crear una nueva publicación en el foro.

- **Actualizar Publicación:**
  - Método: PUT
  - Ruta: `/api/posts/edit/:id`
  - Descripción: Actualizar el contenido de una publicación existente.

### Administración (Función Especial)

- **Obtener Todas las Publicaciones (Admin):**
  - Método: GET
  - Ruta: `/api/posts`
  - Descripción: Obtener una lista de todas las publicaciones para la administración.

- **Eliminar Publicación (Admin):**
  - Método: DELETE
  - Ruta: `/api//posts/delete/:id`
  - Descripción: Eliminar una publicación inapropiada o problemática como administrador.

## Requisitos del Proyecto

### Para el Backend

1. **Node.js y npm:**
   Asegúrate de tener Node.js y npm instalados en tu sistema. Puedes descargarlos desde el sitio web oficial de Node.js: <https://nodejs.org/>

2. **Base de Datos:**
   Si tu aplicación requiere una base de datos, asegúrate de tener un sistema de gestión de bases de datos (como MySQL, PostgreSQL, MongoDB, etc.) instalado y configurado.

### Para el Frontend

1. **Angular CLI:**
   Debes tener Angular CLI instalado para crear y gestionar proyectos de Angular. Puedes instalarlo globalmente con el siguiente comando:

   ```bash
   npm install -g @angular/cli
   ```

### General

1. **Editor de Código:**
   Utiliza un editor de código de tu elección para escribir y modificar el código. Algunas opciones populares son Visual Studio Code, Sublime Text o Atom.

2. **Git:**
   Debes tener Git instalado para clonar y administrar los repositorios de tu proyecto. Puedes descargarlo desde: <https://git-scm.com/>

3. **Cuenta de GitHub (o GitLab, Bitbucket, etc.):**
   Si planeas alojar tu código en un repositorio en línea, asegúrate de tener una cuenta en una plataforma de alojamiento de código como GitHub.

### Conocimientos y Habilidades

1. **Programación:**
   Debes tener conocimientos sólidos de programación en JavaScript/TypeScript para trabajar en el frontend y backend.

2. **Angular:**
   Para trabajar en el frontend, necesitas comprender los conceptos básicos de Angular, como componentes, rutas, servicios, directivas, etc.

3. **Node.js y Express:**
   Para el backend, debes tener conocimientos de Node.js y Express.js para crear endpoints de API y manejar solicitudes HTTP.

4. **Base de Datos:**
   Si tu aplicación requiere una base de datos, necesitas saber cómo trabajar con la base de datos que elijas, ya sea SQL o NoSQL.

5. **Autenticación y Seguridad:**
   Para implementar la autenticación y la seguridad, necesitas conocer conceptos como tokens JWT, manejo de contraseñas seguras, etc.

6. **Git y Control de Versiones:**
   Comprender cómo usar Git y tener una buena práctica de control de versiones es esencial para colaborar en el proyecto.

7. **Metodología Ágil (por ejemplo, Scrum):**
   Si planeas utilizar una metodología ágil para la gestión del proyecto, debes comprender los conceptos básicos y roles en la metodología.

## Logros y Desafíos

### Logros

- Interfaz funcional y amigable.
- Trabajo en equipo efectivo y colaborativo.
- Cumplimiento de los requisitos principales de la biblioteca.

### Desafíos

- Integración de componentes frontend y backend.
- Pruebas exhaustivas y detección temprana de errores.

## Tecnologías Utilizadas

- Frontend: Angular
- Backend: Express.js
- Base de Datos: Mongoose
- Jira Software
- Figma

## Uso de Express.js en el Backend

- Para ejecutar el backend, asegúrate de tener Node.js instalado.
- Navega al directorio del backend: `cd UsersProject_Backend`.
- Instala las dependencias: `npm install`.
- Ejecuta el servidor: `npm start`.

## Uso de Angular en el Frontend

- Asegúrate de tener Node.js y Angular CLI instalados.
- Navega al directorio del frontend: `cd UsersProject_Frontend`.
- Instala las dependencias: `npm install`.
- Ejecuta el servidor de desarrollo: `ng serve`.
- Accede a la aplicación en tu navegador: `http://localhost:4200`.

## Estructura del Proyecto

- `UsersProject_Backend/`: Contiene el código fuente del backend desarrollado en Express.js.
- `UsersProject_Frontend/`: Contiene el código fuente del frontend desarrollado en Angular.

## Primeros Pasos

### Backend

1. **Clonar el Repositorio:**
   Clona el repositorio de backend en tu máquina local utilizando el siguiente comando:

   ```bash
   git clone https://github.com/mellamanmar/UsersProject_Backend.git
   ```

2. **Instalar Dependencias:**
   Navega al directorio del proyecto backend y ejecuta el siguiente comando para instalar las dependencias:

   ```bash
   cd UsersProject_Backend
   npm install
   ```

3. **Configurar la Base de Datos:**
   Si tu backend utiliza una base de datos, asegúrate de configurarla adecuadamente según las instrucciones proporcionadas en la documentación.

4. **Configurar Variables de Entorno:**
   Renombra el archivo `.env.example` a `.env` y configura las variables de entorno necesarias, como las credenciales de la base de datos y cualquier otro valor requerido por tu aplicación.

5. **Ejecutar el Servidor:**
   Inicia el servidor backend con el siguiente comando:

   ```bash
   npm start
   ```

   El servidor estará disponible en el puerto especificado en tu archivo `.env`.

### Frontend

1. **Clonar el Repositorio:**
   Clona el repositorio de frontend en tu máquina local utilizando el siguiente comando:

   ```bash
   git clone https://github.com/mellamanmar/UsersProject_Frontend.git
   ```

2. **Instalar Dependencias:**
   Navega al directorio del proyecto frontend y ejecuta el siguiente comando para instalar las dependencias:

   ```bash
   cd UsersProject_Frontend
   npm install
   ```

3. **Configurar Variables de Entorno:**
   Algunos proyectos frontend pueden requerir configuración de variables de entorno para cosas como las rutas de API. Asegúrate de configurar estas variables según las instrucciones proporcionadas.

4. **Iniciar el Servidor de Desarrollo:**
   Inicia el servidor de desarrollo para el frontend con el siguiente comando:

   ```bash
   ng serve
   ```

   El servidor estará disponible en `http://localhost:4200`. Puedes acceder a la aplicación en tu navegador web.

5. **Explora la Aplicación:**
   Abre tu navegador y navega a `http://localhost:4200` para ver la interfaz de la aplicación. Explora las diferentes secciones y asegúrate de que todo funcione como se espera.

## Derechos Propios de los Colaboradores

Cada colaborador tiene sus propios derechos de autor sobre las partes del código que hayan contribuido al proyecto. Los detalles específicos pueden variar según las leyes de derechos de autor y las regulaciones locales. Si deseas utilizar alguna parte del código desarrollada por un colaborador específico, te recomendamos consultar con ellos y asegurarte de cumplir con sus términos y condiciones.

## Enlaces Proyecto

- [Repositorio Backend](https://github.com/mellamanmar/UsersProject_Backend)
- [Repositorio Frontend](https://github.com/mellamanmar/UsersProject_Frontend)
- [Diseño en Figma](https://www.figma.com/file/eG5uAi82wpIczp2DLS1Eyb/Genius-Botsitos?type=design&node-id=0%3A1&mode=design&t=pGq9gIwETS2tdnCw-1)
- [Documentación](https://docs.google.com/document/d/1aJoppYipik2BulaIUh-WnS3cqHCnUiVn4LXsjfLsrQM/edit?usp=sharing)

## Recursos Adicionales

- [API con Node y SQL](https://www.youtube.com/watch?v=WfCJ3sHnLBM&list=PLtYTVIzWW8XGlN43ZiWWzwEnrbZGaEkyb&ab_channel=TechnicalBabaji)
- [Interfaz de Autenticación para Administrador y Usuario - Tutorial 1](https://www.youtube.com/watch?v=rPD0eY3dRqQ&t=1707s&ab_channel=FaztCode)
- [Interfaz de Autenticación para Administrador y Usuario - Tutorial 2](https://www.youtube.com/watch?v=l_r9nRJ9YTk&t=1462s&ab_channel=FaztCode)
- [Interfaz de Autenticación para Administrador y Usuario - Tutorial 3](https://www.youtube.com/watch?v=1JEQ2cnnBGQ&ab_channel=TutusFunny)
- [Backend para el CRUD de Usuarios - Conexión con Angular](https://www.youtube.com/watch?v=ooAmdvpAE-o&list=PLIbWwxXce3VqQxabv3aT0nHnhHQH6F-qG&index=1&ab_channel=Onslaugth)

## Lecciones Aprendidas

- Importancia de la comunicación constante y reuniones regulares.
- Valor de las pruebas exhaustivas en la calidad del producto final.

## Próximos Pasos

- Exploración de futuras mejoras y posibles integraciones con sistemas de bibliotecas.

## Conclusiones

- Cumplimiento exitoso de los requisitos de la biblioteca.
- Plataforma eficiente para autenticación, perfiles y foro, mejorando la participación y gestión de usuarios.
