import { lazy } from 'react';

const Home = lazy(() => import(/*webpackChunkName: "Home"*/ 'src/pages/Home'));
const CanvasView = lazy(() => import(/*webpackChunkName: "CanvasLayout"*/ 'src/pages/Canvas'));
const NoMatch = lazy(() => import(/*webpackChunkName: "NoMatch"*/ 'src/components/NoMatch'));
const CanvasDetail = lazy(() => import(/* webpackChunkName: "CanvasDetail" */ 'src/pages/CanvasDeatail'));

const routers = [
  {
    path: '/',
    exact: true,
    component: Home,
    lazy: false,
  },
  {
    path: '/canvas',
    exact: true,
    component: CanvasView,
    lazy: true,
  },
  {
    path: '/canvas/:id',
    exact: true,
    component: CanvasDetail,
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
