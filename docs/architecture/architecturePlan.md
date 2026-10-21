# Plan de arquitectura

## Composición de la aplicación

1. Estructura general de la interfaz
El planteamiento es llevar a cabo una Single Page Application en la que cada sección vaya cargando según se seleccione. Por tanto, no toda la página cargará directamente, sino que el contenedor correspondiente a cada apartado (Sobre mí, Proyectos, Trayectoria, Habilidades y Contacto) será el único en pantalla cuando sea seleccionado.

2. Organización del contenido
En la parte superior de la pantalla, y de forma fija (a la vista en la misma posición cuando se haga scroll), estará el menú de navegación con las 5 secciones principales. Debajo de este menú, cargará el contenedor correspondiente a la sección que se seleccione en cada momento.

Los apartados "Sobre mí", "Proyectos", "Trayectoria", "Habilidades" y "Contacto" serán estáticos y cargarán todo el contenido de una sola vez.

El footer incluirá los enlaces de contacto para GitHub, LinkedIn y Correo Electrónico.

Cuando el usuario entra en la página por primera vez (y cada vez que se vuelve a cargar la página), la sección que se muestra por defecto es "Sobre mí".

3. Comportamiento en distintos dispositivos
Si bien en general la composición y la idea es similar para todos los dispositivos, los dispositivos móviles contarán con un "menú hamburguesa" con un desplegable en lugar del menú de navegación con todas las secciones que mostrará la versión de la web para escritorio de ordenador y tablet. El resto de componentes tendrán la misma estructura y diseño, cambiando sólo algunos factores como la cantidad de elementos que caben en pantalla en el grid de la sección "Proyectos" o la organización de la sección trayectoria, que pasará de compaginar trayectoria profesional y educativa de un flexbox horizontal a uno vertical.

## Navegación

- La aplicación seguirá el modelo SPA en el que cada sección tendrá su ruta propia, utilizando para dicho enrutamiento React Router. 
- Los cambios de sección se llevarán a cabo sin recargar el HTML completo.
- La cabecera (menú de navegación) y el footer son elementos persistentes en todas las vistas, cambiando únicamente los elementos centrales. 
- Los botones de retroceder o avanzar cambiarán a la vista anterior o posterior, según corresponda (no corresponderán a la página completa, sino a las vistas y rutas de la misma).
- Se puede acceder directamente a una vista concreta mediante la ruta correspondiente (por ejemplo, (url)/proyectos).

## Estrategia de renderizado

Teniendo en cuenta que la aplicación tendrá el mismo contenido y las mismas funcionalidades para cualquier visitante, tiene sentido elegir un renderizado del lado del cliente (CSR). Esta opción es más adecuada para mantener una arquitectura sencilla y encaja con las tecnologías elegidas en el proyecto, además de que no se necesitan las funcionalidades del enfoque SSR (servidor).

Además, la carga del código será una conjunta desde el inicio, teniendo en cuenta que se trata de un proyecto ligero y que, de esta forma, se evitarán problemas u obstáculos relacionados con una carga diferida.

## Componentes reutilizables

### Estructura
Los elementos que forman el esqueleto de la aplicación y que se mantienen en todas las vistas son:
- Cabecera general con menú de navegación
- Footer
- Contenedor principal (bordes, redondeo, fondo, colores, anchuras, márgenes y espaciados)
- Cabecera de la sección (los estilos y la organización aplican en cada sección)

### Contenido
Los componentes que incluyen contenido y que pueden repetirse dependen de las secciones:

1. Proyectos (Componente "ProjectCard")
En esta sección las tarjetas de los proyectos siguen un patrón similar. Se repetirán títulos, contenidos, botones, colores y tipografías. Además, los tamaños y las proporciones también serán idénticas entre todas las tarjetas.

2. Trayectoria (Componente "TimeLine")
Tanto las entradas de trayectoria profesional como las de trayectoria educativa compartirán el formato de línea del tiempo vertical, por lo que en este caso el componente es reutilizable y llevará un mismo formato.

3. Habilidades (Componente "Skill")
Cada una de las habilidades, ya sea técnica o social, compartirá estructura y formato. Por tanto, el bloque con nombre de la habilidad, imagen y pequeña descripción será reutilizable.

### Interacción
Para la interacción del usuario con la página, los Componente que se repetirán son:
- Menú hamburguesa (en dispositivos móviles)
- Botones (general para bordes, espacios, fuentes y tamaños, teniendo luego cada tipo de botón sus colores específicos)