import React, { useEffect, useState } from 'react';
import Bottom from '../components/Bottom/index';
import { Card, List, Avatar, Button } from 'antd-mobile';
import style from './index.module.less';
import jy from '../../public/image/jy.jpeg';
import { HandPayCircleOutline } from 'antd-mobile-icons';

const ListModel = () => {
  const [leftList, setLeftList] = useState([
    { name: '普通的' },
    { name: '实习的' },
    { name: '高级的' },
    { name: 'VIP的' },
    { name: '大学生' },
    { name: '普通的' },
    { name: '普通的' },
    { name: '普通的' },
    { name: '普通的' },
    { name: '普通的' },
  ]);
  useEffect(() => {
    console.log(style);
  }, []);
  const leftBox = leftList.map((v, k) => {
    return (
      <div className={style.box}>
        <span>{v.name}</span>
      </div>
    );
  });
  return (
    <>
      <div className={style.divTop}>
        <div className={style.divTopLeft}>
          <Avatar src={jy} style={{ '--size': '70px' }} />
        </div>
        <div className={style.divTopRight}>
          <span>宁夏石嘴山一号店</span>
        </div>
      </div>
      <div className={style.divMiddle}>
        <div className={style.divMiddleLeft}>{leftBox}</div>
        <div className={style.divMiddleRight}>
          <Card className={style.card}>
            <List>
              <List.Item
                prefix={<Avatar src={jy} />}
                description="来自黑龙江哈尔滨的"
              >
                Novalee Spicer
              </List.Item>
            </List>
            <div className={style.Button}>
              <Button color="success">就是她了</Button>
            </div>
          </Card>
          <Card className={style.card}>
            <List>
              <List.Item
                prefix={<Avatar src={jy} />}
                description="来自河南郑州的"
              >
                Niu Zi
              </List.Item>
            </List>
            <div className={style.Button}>
              <Button color="success">就是她了</Button>
            </div>
          </Card>
          <Card className={style.card}>
            <List>
              <List.Item prefix={<Avatar src={jy} />} description="来自广西的">
                神秘
              </List.Item>
            </List>
            <div className={style.Button}>
              <Button color="success">就是她了</Button>
            </div>
          </Card>
          <Card className={style.card}>
            <List>
              <List.Item prefix={<Avatar src={jy} />} description="来自东莞的">
                神秘
              </List.Item>
            </List>
            <div className={style.Button}>
              <Button color="success">就是她了</Button>
            </div>
          </Card>
          <Card className={style.card}>
            <List>
              <List.Item prefix={<Avatar src={jy} />} description="来自深圳的">
                神秘
              </List.Item>
            </List>
            <div className={style.Button}>
              <Button color="success">就是她了</Button>
            </div>
          </Card>
          <Card className={style.card}>
            <List>
              <List.Item prefix={<Avatar src={jy} />} description="来自宁夏的">
                神秘
              </List.Item>
            </List>
            <div className={style.Button}>
              <Button color="success">就是她了</Button>
            </div>
          </Card>
        </div>
      </div>
      <Bottom />
    </>
  );
};

export default ListModel;
