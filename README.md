
# Blog con React, TypeScript, Tailwind y Supabase

Este es un proyecto de un blog desarrollado utilizando **React**, **TypeScript** y **Tailwind CSS** en el frontend, y **Supabase** para gestionar el backend.

## Tecnologías utilizadas

- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: Supabase

## Configuración del Backend

El backend está gestionado a través de **Supabase**. Para que el frontend funcione correctamente con el backend, es necesario configurar algunas variables de entorno.

### Archivo `.env.example`

Crea un archivo `.env` en la raíz de tu proyecto y agrega las siguientes variables de entorno, que se deben configurar para que el backend de Supabase funcione correctamente:

```env
# La URL de tu proyecto Supabase
VITE_SUPABASE_URL=https://your-supabase-url.supabase.co

# La clave anónima de Supabase
VITE_SUPABASE_ANON_KEY=your-anon-key
```

### Explicación de las Variables

- **VITE_SUPABASE_URL**: Esta es la URL de tu instancia de Supabase. Reemplaza este valor con la URL de tu propio proyecto en Supabase.
- **VITE_SUPABASE_ANON_KEY**: Esta es la clave anónima de Supabase, que permite a la aplicación conectarse con la base de datos. Debes reemplazarla por tu propia clave anónima generada en el panel de Supabase.

> **Nota**: El archivo `.env` es para asegurar que no se expongan tus datos sensibles como claves o URLs en tu repositorio público.

### Creación de Tablas en Supabase

Para comenzar a utilizar el backend de Supabase, necesitas crear las siguientes tablas en tu base de datos:

1. **Posts**: Para almacenar las publicaciones del blog.
2. **Categories**: Para categorizar las publicaciones.
3. **Comments**: Para almacenar los comentarios de los usuarios en las publicaciones.
4. **Profiles**: Para almacenar los perfiles de los usuarios.

Estas tablas pueden ser creadas desde el panel de administración de Supabase, o puedes ejecutar las siguientes consultas SQL en la consola de Supabase para crear las tablas:

```sql
-- Crear tabla de Posts
CREATE TABLE posts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    excerpt TEXT,
    image_url TEXT,
    date TIMESTAMP NOT NULL DEFAULT NOW(),
    author VARCHAR(255),
    tags TEXT[], -- Lista de etiquetas como arreglo de texto
    read_time VARCHAR(50),
    category_slug VARCHAR(255),
    FOREIGN KEY (category_slug) REFERENCES categories(slug) ON DELETE SET NULL
);

-- Crear tabla de Categories
CREATE TABLE categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    description TEXT,
    color VARCHAR(7) -- Código de color hexadecimal (por ejemplo, #FFFFFF)
);

-- Crear tabla de Comments
CREATE TABLE comments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    content TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    author_email VARCHAR(255) NOT NULL,
    user_id UUID,
    parent_id UUID REFERENCES comments(id) ON DELETE SET NULL,
    replies_count INT DEFAULT 0
);

-- Crear tabla de Profiles
CREATE TABLE profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(), -- ID único para el perfil
    role VARCHAR(50) NOT NULL DEFAULT 'user', -- Rol del usuario (por defecto 'user')
    created_at TIMESTAMP NOT NULL DEFAULT NOW(), -- Fecha de creación del perfil
    updated_at TIMESTAMP NOT NULL DEFAULT NOW() -- Última actualización del perfil
);
```

## Instalación

1. Clona el repositorio:
   ```bash
   git clone <url-del-repositorio>
   ```

2. Accede a la carpeta del proyecto:
   ```bash
   cd nombre-del-proyecto
   ```

3. Instala las dependencias:
   ```bash
   npm install
   ```

4. Crea el archivo `.env.local` en la raíz del proyecto y configura las variables de entorno con los valores proporcionados anteriormente.

5. Ejecuta el proyecto en modo de desarrollo:
   ```bash
   npm run dev
   ```

El proyecto debería estar corriendo en `http://localhost:3000`.

## Contribución

Si deseas contribuir a este proyecto, por favor abre un **pull request** con tus cambios.

## Licencia

Este proyecto está bajo la **Licencia MIT**. Ver el archivo LICENSE para más detalles.
