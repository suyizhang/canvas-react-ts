import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { withRouter } from 'react-router-dom'

import style from './index.less';

const menuList = [
  { value: 'home', label: 'HOME', path: '/' },
  { value: 'canvas', label: 'CANVAS', path: '/canvas' },
  { value: 'animation', label: 'ANIMATION', path: '/animation' },
]

function Header( props: Object ) {
  // const {  } = props;
  // console.log(props);
  const [active, setActive] = useState<String | undefined>('home');

  return (
    <div className={style.syHeader}>
      <div className={style.headerL}>
        SUYI
      </div>
      <div className={style.headerR}>
        {menuList.map((v, i) => (
          <Link onClick={() => setActive(v.value)} to={v.path} key={i} className={`${style.syHeaderLink} ${active === v.value ? style.active : ''}`}>{v.label}</Link>
        ))}
      </div>
      {/* <div className={style.cricle}>
        <div className={style.triangle}></div>
      </div> */}
    </div>
  )
}

export default Header;
// export default withRouter(Header);