import React, { useEffect, useState } from 'react';
import Bottom from '../components/Bottom/index';
import { JumboTabs } from 'antd-mobile';
import style from './index.module.less';
import SelectModel from './components/SelectModel';

const ListReady = () => {
  useEffect(() => {
    console.log(style);
  }, []);
  return (
    <>
      <JumboTabs>
        <JumboTabs.Tab title="选择具体" description="请选择具体套餐" key="1">
          <div className={style.boxDiv}>
            <SelectModel />
          </div>
        </JumboTabs.Tab>
        <JumboTabs.Tab title="下单" description="完成下单操作" key="2">
          西红柿
        </JumboTabs.Tab>
        <JumboTabs.Tab title="评价" description="请评价本次服务" key="3">
          蚂蚁
        </JumboTabs.Tab>
      </JumboTabs>
      <Bottom />
    </>
  );
};

export default ListReady;
