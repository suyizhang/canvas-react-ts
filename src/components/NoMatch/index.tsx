import React from 'react';
import style from './index.less';


function NoMatch (props: Object) {
  // const {  } = props;
  console.log(1,'----')

  return (
    <div className={style.errorView}>
      404
    </div>
  )
}

export default NoMatch;