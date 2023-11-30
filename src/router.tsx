import { App, TlDrawDemo }     from '@/views';
import { createBrowserRouter } from 'react-router-dom';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/tldraw',
                element: <TlDrawDemo />
            }
        ]
    }
]);