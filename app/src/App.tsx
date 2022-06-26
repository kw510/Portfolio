import type { Component } from 'solid-js';
import { lazy } from 'solid-js';
import { useRoutes } from 'solid-app-router';

const routes = [
  {
    path: '/',
    component: lazy(() => import('./views/home')),
  },
  {
    path: '/about',
    element: <div>This site was made with Solid</div>,
  },
  {
    path: '/*all',
    component: lazy(() => import('./views/not-found')),
  },
];

const App: Component = () => {
  const Routes = useRoutes(routes);
  return (
    <Routes />
  );
};

export default App;
