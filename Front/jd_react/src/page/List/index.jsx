import React, { useEffect, useState } from 'react';
import Bottom from '../components/Bottom/index';
import { Card, List, Avatar, Button } from 'antd-mobile';
import style from './index.module.less';
import jy from '../../public/image/jy.jpeg';
import { useNavigate } from 'react-router-dom';

const ListModel = () => {
  const navigate = useNavigate();
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
  const [rightList, setRightList] = useState([
    { name: 'Novalee Spicer', introduce: '来自黑龙江哈尔滨的' },
    { name: '1号', introduce: '来自东莞' },
    { name: '2号', introduce: '来自吉林' },
    { name: '3号', introduce: '来自陆波' },
    { name: '4号', introduce: '来自宁夏本地' },
    { name: '5号', introduce: '来自石嘴山' },
    { name: '6号', introduce: '来自乌鲁木齐的' },
    { name: '17号', introduce: '来自外星的' },
    { name: '18号', introduce: '来自哈萨克斯坦的' },
    { name: '19号', introduce: '来自黑龙江哈尔滨的' },
  ]);
  useEffect(() => {
    console.log(style);
  }, []);
  const handleSubmit = (value) => {
    localStorage.setItem('name', value);
    navigate('/listReady');
  };
  const leftBox = leftList.map((v, k) => {
    return (
      <div className={style.box} key={k}>
        <span>{v.name}</span>
      </div>
    );
  });
  const rightBox = rightList.map((v, k) => {
    return (
      <Card className={style.card} key={k}>
        <List>
          <List.Item prefix={<Avatar src={jy} />} description={v.introduce}>
            {v.name}
          </List.Item>
        </List>
        <div className={style.Button}>
          <Button color="success" onClick={() => handleSubmit(v.name)}>
            下一步
          </Button>
        </div>
      </Card>
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
        <div className={style.divMiddleRight}>{rightBox}</div>
      </div>
      <Bottom />
    </>
  );
};

export default ListModel;
