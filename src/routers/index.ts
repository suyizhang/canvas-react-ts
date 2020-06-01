import { lazy } from 'react';

const Home = lazy(() => import(/*webpackChunkName: "Home"*/ 'src/pages/Home'));
const CanvasLayout = lazy(() => import(/*webpackChunkName: "CanvasLayout"*/ 'src/pages/CanvasLayout'));
const NoMatch = lazy(() => import(/*webpackChunkName: "NoMatch"*/ 'src/components/NoMatch'));

const routers = [
  {
    path: '/',
    exact: true,
    component: Home,
    lazy: false,
  },
  {
    path: '/canvas',
    exact: false,
    component: CanvasLayout,
    lazy: true,
  },
  // {
  //   path: '/comments',
  //   exact: false,
  //   component: Comments,
  // },
  // {
  //   path: '/cv',
  //   exact: false,
  //   component: Cv,
  // },
  {
    path: '',
    exact: false,
    component: NoMatch,
    lazy: true,
  },
];
export default routers;
