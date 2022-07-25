import React, { useEffect, useState } from 'react';
import Bottom from '../components/Bottom/index';
import { Avatar } from 'antd-mobile';
import style from './index.module.less';
import jy from '../../public/image/jy.jpeg';

const Personal = () => {
  useEffect(() => {
    console.log(style);
  }, []);
  return (
    <>
      <div className={style.divTop}>
        <Avatar src={jy} style={{ '--size': '100px' }} />
      </div>
      <div className={style.divMiddle}>
        <span>我是金儿</span>
      </div>

      <Bottom />
    </>
  );
};

export default Personal;
