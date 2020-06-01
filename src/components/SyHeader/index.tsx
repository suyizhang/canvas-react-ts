import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import style from './index.less';

const menuList = [
  { value: 'home', label: 'home', path: '/' },
  { value: 'canvas', label: 'canvas', path: '/canvas' },
  { value: 'animation', label: 'animation', path: '/animation' },
]

function Header() {

  const [active, setActive] = useState<String | undefined>()

  return (
    <div className={style.syHeader}>
      {menuList.map((v, i) => (
        <Link onClick={() => setActive(v.value)} to={v.path} key={i} className={`${active === v.value ? 'active' : ''}`}>{v.label}</Link>
      ))}
    </div>
  )
}

export default Header;