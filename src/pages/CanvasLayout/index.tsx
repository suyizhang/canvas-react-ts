import React from 'react';
import { Route, Switch, Link } from "react-router-dom";
import CanvasList from './components/CanvasList';
import CanvasDetail from './components/CanvasDetail';

function CanvasLayout() {
	console.log(1);
	return (
		<div className="user-sub-layout">
			<aside>
				{/* <UserNav /> */}
				<ul>
					<li>
						<Link to="/canvas">注册</Link>
					</li>
					<li>
						<Link to="/canvas/1">登录</Link>
					</li>
				</ul>

			</aside>
			<div className="primary-content">

				<Switch>
					<Route path="/canvas" exact component={CanvasList} />
					<Route path="/canvas/:userId" component={CanvasDetail} />
				</Switch>
			</div>
		</div>
	)
}

export default CanvasLayout;