import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { activeKey } from '../../../atoms/index';
import { useNavigate } from 'react-router-dom';
import {
  AppOutline,
  MessageOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons';
import { Badge, TabBar } from 'antd-mobile';
import style from './index.module.less';

const Bottom = () => {
  const navigate = useNavigate();
  const [active, setActive] = useRecoilState(activeKey);
  const tabs = [
    {
      key: '1',
      title: '首页',
      icon: <AppOutline />,
      badge: Badge.dot,
    },
    {
      key: '2',
      title: '商品列表',
      icon: <UnorderedListOutline />,
      badge: '5',
    },
    {
      key: '3',
      title: '没啥比用',
      icon: <MessageOutline />,
      badge: '99+',
    },
    {
      key: '4',
      title: '个人中心',
      icon: <UserOutline />,
    },
  ];
  const hanldeChangeKey = (e) => {
    if (e === '1') {
      navigate('/home');
    } else if (e === '2') {
      navigate('/List');
    } else if (e === '4') {
      navigate('/personal');
    }
    setActive(e);
  };
  return (
    <TabBar
      activeKey={active}
      onChange={hanldeChangeKey}
      className={style.bottom}
    >
      {tabs.map((item) => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  );
};

export default Bottom;
