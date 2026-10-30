# Portfolio Web — Paco Canovaca

🌐Desplegado en: https://paco-canovaca.vercel.app/

## 📖 ¿Qué es este proyecto?

Portfolio web personal de Paco Canovaca, desarrollado como una **Single Page Application (SPA)** para presentar su perfil profesional en una interfaz clara, adaptable a distintos dispositivos y organizada por secciones.

La aplicación reúne la presentación personal, los proyectos, la trayectoria profesional y académica, las habilidades y un formulario de contacto. La navegación se gestiona en el cliente con React Router, de modo que cada apartado tiene su propia ruta sin depender de un backend propio.

El contenido de proyectos, formación, experiencia y habilidades se mantiene en archivos JSON separados de los componentes de interfaz. El formulario de contacto utiliza **EmailJS** para enviar mensajes desde el navegador.

## 🛠️ Stack Tecnológico

- **Lenguaje:** JavaScript (ES Modules).
- **Interfaz:** React 19.
- **Estilos y diseño adaptable:** Tailwind CSS 4.
- **Navegación:** React Router 7.
- **Iconos:** Lucide React.
- **Formulario de contacto:** EmailJS Browser SDK.
- **Servidor de desarrollo y compilación:** Vite 8.
- **Calidad de código:** ESLint.
- **Control de versiones y despliegue:** Git y Vercel.

## 🚀 Instalación y Puesta en Marcha

### Requisitos previos

- Git.
- Node.js **20.19 o superior, o 22.12 o superior**, y npm. Estas versiones cumplen los requisitos de Vite 8.

### Arrancar el proyecto en local

```bash
git clone https://github.com/PacoCanovaca/PortfolioWeb.git
cd PortfolioWeb
npm ci
npm run dev
```

Vite mostrará en la terminal la dirección local. Por defecto, la aplicación está disponible en `http://localhost:5173`.

### Comandos útiles

```bash
npm run lint      # Analiza el código con ESLint
npm run build     # Genera la versión de producción en dist/
npm run preview   # Sirve localmente la compilación de producción
```

## ⚙️ Configuración del Entorno

El formulario de contacto necesita credenciales de una cuenta de **EmailJS**. Crea un archivo `.env.local` en la raíz del proyecto con los siguientes valores:

```dotenv
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
```

Sustituye los marcadores por los identificadores y la clave pública de tu propia configuración de EmailJS. La plantilla debe contemplar los campos `name`, `email` y `message`, que son los que envía el formulario.

Vite solo expone al código del navegador las variables que empiezan por `VITE_`. Por tanto, **no guardes contraseñas, claves privadas ni tokens de servidor en estas variables**. La clave pública de EmailJS está pensada para su uso en el cliente; configura también las restricciones y medidas antispam disponibles en EmailJS.

El archivo `.env.local` está excluido del control de versiones mediante `.gitignore`. No incluyas credenciales reales en el repositorio.

## 📂 Estructura del Proyecto

```text
PortfolioWeb/
├── data/
│   ├── education.json       # Formación académica
│   ├── experience.json      # Experiencia profesional
│   ├── projects.json        # Proyectos del portfolio
│   └── skills.json          # Habilidades y competencias
├── docs/                    # Documentación y recursos de apoyo
├── public/                  # Recursos estáticos públicos, como el favicon
├── src/
│   ├── assets/              # Imágenes, iconos y documentos del portfolio
│   ├── components/
│   │   ├── content/         # Componentes reutilizables de contenido
│   │   ├── interaction/     # Navegación e interacción
│   │   ├── sections/        # Presentación, proyectos, trayectoria, skills y contacto
│   │   └── structure/       # Cabecera, pie y contenedores de estructura
│   ├── App.jsx              # Rutas y composición principal
│   ├── index.css            # Estilos globales y tema de Tailwind
│   └── main.jsx             # Punto de entrada y BrowserRouter
├── .env.local               # Variables de entorno locales (no versionar)
├── index.html               # Plantilla HTML
├── package.json             # Dependencias y scripts npm
├── vite.config.js           # Configuración de Vite y Tailwind
└── README.md
```

### Rutas principales

| Ruta | Contenido |
|---|---|
| `/about-me` | Presentación personal y acceso al CV |
| `/projects` | Proyectos desarrollados |
| `/career-path` | Experiencia profesional y formación |
| `/skills` | Habilidades técnicas y competencias transversales |
| `/contact` | Formulario de contacto |

La ruta `/` redirige a `/about-me`. Las rutas desconocidas muestran la página de error 404.

## 🖼️ Características Visuales e Interfaz

- Diseño adaptable con Tailwind CSS y componentes reutilizables.
- Navegación persistente mediante cabecera y pie de página compartidos.
- Estética minimalista, con tonos carmín, fondos claros y tipografías IBM Plex Sans e IBM Plex Mono.
- Datos de proyectos, trayectoria y habilidades separados de la lógica visual mediante archivos JSON.
- Formulario de contacto con estados de envío, confirmación y error.

## 👨‍💻 Autor y Licencia

**Paco Canovaca**

- **GitHub:** [PacoCanovaca](https://github.com/PacoCanovaca)
- **LinkedIn:** [Perfil profesional](https://www.linkedin.com/in/francisco-jos%C3%A9-canovaca-c%C3%A1rdenas-65a51a1aa/)
- **Email:** [pacocanovaca97@gmail.com](mailto:pacocanovaca97@gmail.com)

**Licencia:** [ISC](https://opensource.org/licenses/ISC)
