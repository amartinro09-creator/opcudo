# OPCUDO · versión 39 (12-nov-2026)

**OPCUDO** (opciones + escudo) · *Entiende el riesgo antes de asumirlo.* Curso «Opciones, de cero al mecanismo».

Esta carpeta es la app completa, fuera de Claude. Es una web normal: se publica tal cual y desde el móvil se instala como una app («Añadir a pantalla de inicio» o «Instalar app»). Funciona sin conexión después de la primera visita.

## Qué hay dentro

| Archivo | Para qué sirve |
|---|---|
| `index.html` | La app entera |
| `manifest.webmanifest` | Nombre, icono y colores al instalarla en el móvil |
| `sw.js` | Hace que funcione sin conexión |
| `privacidad.html`, `aviso-legal.html` | Páginas legales (hay que rellenarlas, ver abajo) |
| `fonts/` | Las fuentes Bricolage Grotesque e Inter (licencia SIL OFL 1.1) y la licencia de los iconos Phosphor (MIT) |
| `icons/` | Iconos de la app |
| `.nojekyll` | Archivo vacío para que GitHub Pages publique la carpeta tal cual |

No carga nada de otros servidores: ni fuentes de Google, ni analítica, ni anuncios.

## Antes de publicar: 3 huecos que tiene que rellenar una persona adulta

En `privacidad.html` y `aviso-legal.html` hay huecos marcados en amarillo:

1. `[nombre y apellidos de la persona adulta responsable]`
2. `[correo del proyecto]`: mejor un correo creado solo para el proyecto.
3. `[fecha de publicación]`

Se pueden editar con cualquier editor de texto o desde la propia web de GitHub (icono del lápiz).

## Publicarla en opcudo.es (GitHub Pages + dominio de IONOS)

La web principal es **opcudo.es**. opcudo.com y opcudo.store redirigen a ella. El paquete ya trae el archivo `CNAME` con `opcudo.es`.

### 1. GitHub (una persona adulta)
1. Crea una cuenta en github.com. Elige bien el nombre de usuario: aparece en la dirección provisional.
2. **New repository** → nombre `opcudo` → **Public** → **Create repository**.
3. **uploading an existing file** → arrastra **todo el contenido** de esta carpeta (no la carpeta), incluidas `fonts`, `icons`, `CNAME` y `.nojekyll` → **Commit changes**.
   - Los archivos que empiezan por punto (`.nojekyll`) a veces no se ven en el Finder o el Explorador. Actívalos (Mac: Cmd + Mayús + punto) o súbelo aparte.
4. **Settings → Pages** → Source: **Deploy from a branch** → rama **main**, carpeta **/ (root)** → **Save**.
5. En esa misma pantalla, **Custom domain**: escribe `opcudo.es` → **Save**. Hazlo **antes** de tocar los DNS (lo recomienda GitHub, para que nadie pueda ocupar tu dominio).
6. Recomendado: **Settings (de tu perfil) → Pages → Add a domain** → `opcudo.es`, y sigue los pasos para verificarlo (te pide un registro TXT en IONOS).

### 2. IONOS: DNS de opcudo.es
En IONOS: **Dominios y SSL** → `opcudo.es` → **DNS**.
1. **Borra** los registros **A** y **AAAA** que haya para `@` (los que pone IONOS por defecto apuntan a su página de aparcamiento). Borra también el registro de `www` si existe.
2. Añade cuatro registros **A**, host `@`:
   - 185.199.108.153
   - 185.199.109.153
   - 185.199.110.153
   - 185.199.111.153
3. Añade un registro **CNAME**, host `www`, valor `USUARIO.github.io` (tu usuario de GitHub, sin el nombre del repositorio).
4. No crees registros comodín (`*`).

### 3. IONOS: opcudo.com y opcudo.store
En cada uno: **Dominios y SSL** → el dominio → **Redirección** (o «Destino del dominio») → **Redirección HTTP** a `https://opcudo.es`, tipo **301 (permanente)**.

### 4. Activar HTTPS
Cuando el dominio funcione (de minutos a 24 horas), vuelve a **Settings → Pages** del repositorio y marca **Enforce HTTPS**. La casilla puede tardar hasta 24 horas en estar disponible.

## Probarla antes de dársela a nadie

- Abre https://opcudo.es en el móvil, en una ventana de incógnito: debe salir la bienvenida con el escudo de OPCUDO y las cinco letras griegas.
- Para revisar todas las lecciones sin hacerlas en orden, añade `#libre` al final de la dirección.
- Instálala en el móvil y ábrela con el modo avión puesto: debe funcionar igual.

## Publicar una versión nueva más adelante

1. Sustituye `index.html` por el nuevo.
2. En `sw.js`, cambia el número de la línea `const V='opciones-v39-2';`, por ejemplo a `-2`. Sin ese cambio, los móviles que ya la tienen instalada seguirían viendo la versión anterior.

## Qué trae la versión 39

- **Nombre y marca:** OPCUDO, con su escudo y el lema.
- **Modo Universidad:** el alumno elige su universidad o escuela de una lista, sin código. Activa el informe para el profesor y pone el centro en el certificado. Una vez elegido, el centro no se puede cambiar (antes se pide confirmación). El centro lo indica el alumno: la app no lo comprueba y no está afiliada a los centros de la lista (lo dicen la app y el aviso legal).
- **Llevar el progreso a otro dispositivo:** en «Tú → Más», con un código que se copia o se guarda como archivo. No usa ningún servidor.
- **Enviar el informe al profesor:** abre el correo o la aplicación de mensajería del propio alumno.
- **Práctica abierta** desde el primer día.
- **Certificado para todos** al aprobar el test final, con el logo de OPCUDO: acredita el curso de iniciación.
- **Recorrido de primera vez:** al entrar, la app explica cómo funciona, con el botón «?» y la pestaña «Tú». Se repite desde Tú → Ajustes.
- El número de versión ya no se ve dentro de la app.

## Lo que esta versión NO hace todavía

No hay servidor: tú no ves el progreso de los alumnos desde tu lado. Las cifras para presentar a una universidad salen de los informes que te envíen los alumnos o su profesor: se reúnen en «Tú → ¿Eres profesor?», que da la tabla y los totales. Para verlo en directo hace falta una base de datos (Supabase u otra) a nombre de una persona adulta, y cambiar la página de privacidad.

## Datos y privacidad

El progreso de cada alumno se guarda solo en su navegador. El informe para el profesor (CSV) y el certificado (imagen) se crean en el dispositivo del alumno y solo salen de él si el alumno los descarga y los comparte. GitHub registra la dirección IP de quien visita la web por motivos de seguridad: está explicado en `privacidad.html`.
