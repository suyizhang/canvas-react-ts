import React, { Suspense } from 'react';
import { Provider } from "mobx-react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { hot } from "react-hot-loader/root";
import routers from 'src/routers';
import SyHeader from 'src/components/SyHeader';
import SyFooter from 'src/components/SyFooter';

import style from './index.less';

function App() {
  return (
    <Provider {...SuyiStore}>
      <BrowserRouter>
        <SyHeader />
        <div className={style.syContent}>
        <Suspense fallback={<div>loading</div>}>
          <Switch>
            {routers.map(v => {
              return <Route key={v.path} path={v.path} exact={v.exact} component={v.component} />
            }
            )}
          </Switch>
        </Suspense>
        </div>
        <SyFooter />
      </BrowserRouter>
    </Provider>
  );
}

export default hot(App);
