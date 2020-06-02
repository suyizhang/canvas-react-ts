import React, { Suspense } from 'react';
import { Provider } from "mobx-react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { hot } from "react-hot-loader/root";
import routers from 'src/routers';
import SyHeader from 'src/components/SyHeader';
import SyFooter from 'src/components/SyFooter';
import Loading from 'src/components/Loading';

import style from './index.less';

function App() {
  return (
    <Provider {...SuyiStore}>
      <HashRouter>
        <SyHeader />
        <div className={style.syContent}>
        <Suspense fallback={<Loading />}>
          <Switch>
            {routers.map(v => {
              return <Route key={v.path} path={v.path} exact={v.exact} component={v.component} />
            }
            )}
          </Switch>
        </Suspense>
        </div>
        <SyFooter />
      </HashRouter>
    </Provider>
  );
}

export default hot(App);
