import {paths} from '@/config/paths';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';

const createAppRouter = () =>
    createBrowserRouter([
        {
            path: paths.home.path,
            lazy: async () => {
                const m = await import('./routes/landing');
                return {element: <m.default />};
            },
        },
        {
            path: '*',
            lazy: async () => {
                const m = await import('./routes/not-found');
                return {element: <m.default />};
            },
        },
    ]);

export const AppRouter = () => {
    const router = createAppRouter();

    return <RouterProvider router={router} />;
};
