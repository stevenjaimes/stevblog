import { Post } from '../types/Post';

export const posts: Post[] = [
  {
    id: '1',
    title: 'Introducción a React 18: Nuevas características',
    excerpt: 'Descubre las nuevas características y mejoras que trae React 18, incluyendo concurrent rendering y automatic batching.',
    content: `
React 18 trae consigo importantes mejoras y nuevas características que hacen que el desarrollo de aplicaciones sea más eficiente y potente.

## Concurrent Rendering

Una de las características más destacadas es el Concurrent Rendering, que permite que React trabaje en múltiples versiones de la UI al mismo tiempo. Esto significa que React puede preparar nuevas pantallas en segundo plano sin bloquear el hilo principal.

## Automatic Batching

React 18 introduce el automatic batching por defecto, lo que significa que múltiples actualizaciones de estado se agruparán en una sola re-renderización para mejor rendimiento.

## Suspense en el Servidor

Ahora podemos usar Suspense en el servidor, lo que nos permite tener un mejor control sobre cómo se carga nuestra aplicación.

## Nuevos Hooks

React 18 también introduce nuevos hooks como useId() y useSyncExternalStore() que nos ayudan a manejar mejor ciertos casos de uso comunes.
    `,
    date: '2024-01-08',
    imageUrl: 'https://picsum.photos/800/600',
    author: 'Juan Pérez',
    tags: ['React', 'JavaScript', 'Frontend'],
    readTime: '5 min'
  },
  {
    id: '2',
    title: 'Optimización de Rendimiento en React',
    excerpt: 'Aprende las mejores prácticas y técnicas para optimizar el rendimiento de tus aplicaciones React.',
    content: `
La optimización del rendimiento es crucial para crear aplicaciones React que sean rápidas y respondan bien a las interacciones del usuario.

## Memoización con useMemo y useCallback

La memoización es una técnica poderosa para optimizar el rendimiento:

\`\`\`jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
const memoizedCallback = useCallback(() => doSomething(a, b), [a, b]);
\`\`\`

## React.memo para Componentes

Utiliza React.memo para evitar re-renderizados innecesarios:

\`\`\`jsx
const MyComponent = React.memo(function MyComponent(props) {
  // tu componente
});
\`\`\`

## Code Splitting

Implementa code splitting para reducir el tamaño del bundle inicial:

\`\`\`jsx
const MyComponent = React.lazy(() => import('./MyComponent'));
\`\`\`
    `,
    date: '2024-01-07',
    imageUrl: 'https://picsum.photos/800/601',
    author: 'María García',
    tags: ['React', 'Performance', 'Optimización'],
    readTime: '8 min'
  },
  {
    id: '3',
    title: 'Gestión de Estado con Redux Toolkit',
    excerpt: 'Una guía completa sobre cómo gestionar el estado de tu aplicación usando Redux Toolkit.',
    content: `
Redux Toolkit es la manera moderna y recomendada de escribir lógica Redux. Simplifica muchos aspectos de la configuración y reduce el código boilerplate.

## Configuración de la Store

\`\`\`typescript
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer
});
\`\`\`

## Creación de Slices

Los slices son una forma más sencilla de definir reducers y actions:

\`\`\`typescript
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1
  }
});
\`\`\`

## Thunks para Lógica Asíncrona

Redux Toolkit facilita el manejo de operaciones asíncronas:

\`\`\`typescript
export const fetchUserById = createAsyncThunk(
  'users/fetchByIdStatus',
  async (userId: string) => {
    const response = await api.fetchUser(userId);
    return response.data;
  }
);
\`\`\`
    `,
    date: '2024-01-06',
    imageUrl: 'https://picsum.photos/800/602',
    author: 'Carlos López',
    tags: ['Redux', 'React', 'Estado'],
    readTime: '10 min'
  },
  {
    id: '4',
    title: 'TypeScript en React: Mejores Prácticas',
    excerpt: 'Descubre cómo aprovechar al máximo TypeScript en tus proyectos React.',
    content: `
TypeScript se ha convertido en una herramienta esencial para el desarrollo de aplicaciones React. Veamos algunas mejores prácticas.

## Tipado de Props

Define interfaces claras para tus props:

\`\`\`typescript
interface UserProps {
  name: string;
  age: number;
  email?: string; // Prop opcional
}

const User: React.FC<UserProps> = ({ name, age, email }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      {email && <p>Email: {email}</p>}
    </div>
  );
};
\`\`\`

## Hooks Tipados

Aprovecha el tipado en tus hooks:

\`\`\`typescript
const [user, setUser] = useState<User | null>(null);

type ApiResponse<T> = {
  data: T;
  status: number;
};

const { data, error } = useQuery<ApiResponse<User>>('/api/user');
\`\`\`

## Eventos Tipados

Maneja eventos con tipos correctos:

\`\`\`typescript
const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setName(event.target.value);
};

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  // ...
};
\`\`\`
    `,
    date: '2024-01-05',
    imageUrl: 'https://picsum.photos/800/603',
    author: 'Ana Martínez',
    tags: ['TypeScript', 'React', 'Frontend'],
    readTime: '7 min'
  }
];
