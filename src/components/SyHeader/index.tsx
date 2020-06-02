import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import style from './index.less';

const menuList = [
  { value: '', label: 'HOME', path: '/' },
  { value: 'canvas', label: 'CANVAS', path: '/canvas' },
  { value: 'animation', label: 'ANIMATION', path: '/animation' },
]

interface Props {
  location: {
    pathname: string
  }
}

function Header( props: Props ) {
  const { location } = props;
  const { pathname } = location;
  const active = pathname.split('/')[1];

  return (
    <div className={style.syHeader}>
      <div className={style.headerL}>
        SUYI
      </div>
      <div className={style.headerR}>
        {menuList.map((v, i) => (
          <Link to={v.path} key={i} className={`${style.syHeaderLink} ${active === v.value ? style.active : ''}`}>{v.label}</Link>
        ))}
      </div>
      {/* <div className={style.cricle}>
        <div className={style.triangle}></div>
      </div> */}
    </div>
  )
}

export default withRouter(Header);