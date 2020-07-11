import React, { useState } from 'react';
import HomeCanvas from './components/homeCanvas';

import style from './index.less';

function Home() {
	// const [text, setText] = useState<string>('素衣拂微澜');

	// const changeText = (e: any) => {
	// 	setText(e.currentTarget.value);
	// 	// console.log(e, 'e')
	// 	// let timer = null;
	// 	// if(timer !== null) {
	// 	// 	clearTimeout(timer);
	// 	// 	timer = setTimeout(() => {
	// 	// 		setText(e.currentTarget.value);
	// 	// 	}, 1000);
	// 	// }
	// }

	return (
		<div className={style.syHome}>
				<div className={style.syBanner}>
				</div>
			<HomeCanvas text='素衣拂微澜' />
			{/* <input type="text" value={text} onChange={changeText} /> */}
		</div>
	)
}

export default Home;