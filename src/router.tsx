import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from 'react-router-dom';
import { Core, NewsCardInfo } from './pages';
import { Layout } from './components';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={'/'} element={<Layout />}>
        <Route index element={<Core />} />
        <Route path={'/fashion'} element={<Core />} />
        <Route path={'/technologies'} element={<Core />} />
        <Route path={'/sport'} element={<Core />} />
        <Route path={'/karpov'} element={<Core />} />
        <Route path={'/news/:id'} element={<NewsCardInfo />} />
        <Route path={'*'} element={<Navigate to="/" replace />}
        />
      </Route>
    </>
  )
);

export const Router = () => <RouterProvider router={router} />
