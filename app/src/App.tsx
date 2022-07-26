import type { Component } from 'solid-js';
import { lazy } from 'solid-js';
import { useRoutes } from 'solid-app-router';
import Footer from './components/footer';

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
    <>
      <div class="mx-auto max-w-8xl dark:bg-gray-900">
        <Routes />
        <Footer />
      </div>
    </>
  );
};

export default App;
