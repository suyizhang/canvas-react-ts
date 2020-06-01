import React, { lazy } from 'react';
import { Route, Switch } from "react-router-dom";

const CanvasList = lazy(() => import(/* webpackChunkName: "CanvasList" */ './components/CanvasList'));
const CanvasDetail = lazy(() => import(/* webpackChunkName: "CanvasDetail" */ './components/CanvasDetail'));

function CanvasLayout() {
	return (
		<div className="primary-content">
			<Switch>
				<Route path="/canvas" exact component={CanvasList} />
				<Route path="/canvas/:userId" component={CanvasDetail} />
			</Switch>
		</div>
	)
}

export default CanvasLayout;
