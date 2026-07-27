# Gestión de Restaurantes en Línea

Sistema de gestión para restaurantes que permite administrar empleados, menús y pedidos de manera eficiente. Desarrollado con Node.js, Express, MongoDB y Tailwind CSS.

## 🚀 Características

- Gestión de empleados
- Interfaz moderna con Tailwind CSS
- Base de datos MongoDB
- API RESTful
- Hot reload en desarrollo
- Soporte para Docker/Docker Compose
- CSS procesado con PostCSS

## 🛠 Tecnologías Utilizadas

### Backend
- **Node.js** - Runtime JavaScript
- **Express** - Framework web
- **MongoDB** - Base de datos NoSQL
- **Mongoose** - ODM para MongoDB
- **dotenv** - Gestión de variables de entorno
- **morgan** - Logging HTTP
- **body-parser** - Parsing de bodies

### Frontend
- **Tailwind CSS** - Framework CSS utility-first
- **PostCSS** - Procesamiento CSS
- **Autoprefixer** - Prefijos CSS automáticos

### DevOps
- **Docker** - Contenedores
- **Docker Compose** - Orquestación de contenedores
- **Nodemon** - Auto-reload en desarrollo
- **Browser-Sync** - Hot reload
- **Concurrently** - Ejecución múltiple de scripts

## 📋 Prerrequisitos

- Node.js 18+
- npm o yarn
- Docker y Docker Compose (opcional, para contenedores)
- MongoDB Atlas o MongoDB local

## 🔧 Instalación

### 1. Clonar el repositorio
```bash
git clone <repository-url>
cd curso-mongodb-nodejs/app
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar variables de entorno
Copia el archivo `.env.example` y renómbralo a `.env`:
```bash
cp .env.example .env
```

Edita `.env` con tus credenciales:
```env
pass=your_mongodb_password
PORT=3000
MONGO_URI=mongodb+srv://yamiddev_db_user:your_password@cluster-dev.loe0ymb.mongodb.net/test?appName=Cluster-Dev
```

### 4. Compilar CSS
```bash
npm run build:css
```

## 🎯 Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm start` | Inicia el servidor con nodemon |
| `npm run build:css` | Compila el CSS con PostCSS |
| `npm run watch:css` | Observa cambios en CSS y recompila automáticamente |
| `npm run dev` | Inicia servidor, watch CSS y hot reload |

## 🚀 Uso

### Desarrollo con Hot Reload
Para desarrollo con hot reload automático:
```bash
npm run dev
```

Esto iniciará:
- Servidor Express en `http://localhost:3000`
- Watch de CSS con recompilación automática
- Browser-Sync en `http://localhost:3001` con hot reload

Accede a `http://localhost:3001` para ver la aplicación con hot reload activado.

### Desarrollo Normal
```bash
npm start
```
La aplicación estará disponible en `http://localhost:3000`

### Compilar CSS Manualmente
Si haces cambios en el CSS, ejecuta:
```bash
npm run build:css
```

## 🐳 Docker

### Construir y Ejecutar con Docker Compose
```bash
docker-compose up --build
```

Esto iniciará:
- Aplicación Node.js en `http://localhost:3000`
- MongoDB local en `mongodb://mongodb:27017/restaurante`

### Detener Contenedores
```bash
docker-compose down
```

### Detener y Eliminar Volúmenes
```bash
docker-compose down -v
```

## 📁 Estructura del Proyecto

```
app/
├── controllers/          # Controladores de la aplicación
├── models/              # Modelos Mongoose
├── routes/              # Rutas Express
│   ├── empleado.js      # Rutas de empleados
│   └── view.js          # Rutas de vistas
├── views/               # Vistas HTML
│   ├── index.html       # Página principal
│   └── styles/          # Estilos CSS
│       ├── styles.css   # CSS source con @apply
│       └── output.css   # CSS compilado (no en git)
├── public/              # Archivos estáticos
│   └── styles.css       # CSS compilado para producción
├── server.js            # Servidor Express principal
├── Dockerfile           # Configuración Docker
├── docker-compose.yml   # Orquestación Docker Compose
├── tailwind.config.js   # Configuración Tailwind CSS
├── postcss.config.js    # Configuración PostCSS
├── package.json         # Dependencias y scripts
├── .env                 # Variables de entorno (no en git)
├── .env.example         # Ejemplo de variables de entorno
└── .dockerignore        # Archivos ignorados por Docker
```

## 🔐 Variables de Entorno

| Variable | Descripción | Default |
|----------|-------------|---------|
| `pass` | Contraseña de MongoDB Atlas | - |
| `PORT` | Puerto del servidor | 3000 |
| `MONGO_URI` | URI de conexión MongoDB | MongoDB Atlas |

## 🎨 Tailwind CSS

El proyecto usa Tailwind CSS con directivas `@apply` para componentes personalizados.

### Clases Personalizadas

- `.btn-primary` - Botón primario azul
- `.card` - Tarjeta con sombra y bordes redondeados

### Modificar Estilos

1. Edita `views/styles/styles.css`
2. Ejecuta `npm run build:css` o usa `npm run dev` para compilación automática

## 📝 API Endpoints

### Empleados
- `GET /api/empleado` - Obtener todos los empleados
- `POST /api/empleado` - Crear nuevo empleado
- `GET /api/empleado/:id` - Obtener empleado por ID
- `PUT /api/empleado/:id` - Actualizar empleado
- `DELETE /api/empleado/:id` - Eliminar empleado

## 🤝 Contribución

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

ISC

## 👤 Autor

**Yamid Dev**

## 🙏 Agradecimientos

- Tailwind CSS por el framework CSS
- MongoDB por la base de datos
- Express por el framework web
