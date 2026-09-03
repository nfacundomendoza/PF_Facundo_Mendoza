# Portfolio de Facundo Mendoza

Sitio personal en español. Los proyectos destacados son el sistema de asistencias de Ciencias Médicas (UNLP), el registro de información clínica para el Hospital Dr. Pepe Olaechea y FlipTracker.

El sitio está en `portfolio/`. Usa React, Vinext y CSS; se exporta como archivos estáticos y no necesita servidor de aplicación ni base de datos.

## Desarrollo local

Requiere Node.js 24 y pnpm 11.

```sh
cd portfolio
pnpm install
pnpm dev
```

## Publicar en GitHub Pages

1. Subir este repositorio a GitHub.
2. En Settings → Pages, seleccionar GitHub Actions como origen.
3. En Actions, ejecutar manualmente **Publicar portfolio en GitHub Pages**.

El flujo detecta automáticamente la subruta de GitHub Pages. Para usar un dominio propio, configurarlo en Settings → Pages y ajustar los registros DNS según indique GitHub. Luego volver a ejecutar el flujo. No se ha publicado el sitio ni se ha configurado un dominio desde este proyecto.

Para generar los archivos estáticos localmente:

```sh
cd portfolio
pnpm build
```

El resultado está en `portfolio/dist/client/`.

## Editar contenido

- `portfolio/app/page.tsx`: textos, proyectos, tecnologías y contacto.
- `portfolio/app/globals.css`: diseño y adaptación a celulares.
- `portfolio/app/layout.tsx`: título y descripción.
- `portfolio/public/CV-Facundo-Mendoza.pdf`: CV descargable.

Las portadas son composiciones tipográficas con iconos: no son capturas de los productos. CEDICA y Villa Argüello se presentan como trabajos académicos sin afirmar adopción institucional. No se añadieron métricas, vínculos a demos ni perfiles sociales que no hayan sido confirmados.
