import React, { useEffect, useState } from 'react';
import { Button, Grid } from 'antd-mobile';
import { useRecoilState } from 'recoil';
import { homeList } from '../../atoms/index';
import { HandPayCircleOutline, BankcardOutline } from 'antd-mobile-icons';
import { userIssues } from '../../service/services';
import Bottom from '../components/Bottom/index';
import style from './index.module.less';
const Home = () => {
  const [list, setList] = useRecoilState(homeList);
  useEffect(() => {
    userIssues({}).then((res) => {
      console.log(res);
    });
  }, []);
  const change = () => {
    console.log(list);
    setList([{ name: '无' }]);
  };
  const Box = list.map((v, k) => {
    return (
      <Grid.Item key={k}>
        <div className={style.box}>
          <Grid columns={1} gap={0}>
            <Grid.Item>
              <BankcardOutline fontSize={40} color="" />
            </Grid.Item>
            <Grid.Item className={style.top10}>
              <span>{v.name}</span>
            </Grid.Item>
          </Grid>
        </div>
      </Grid.Item>
    );
  });
  return (
    <div>
      <div className={style.divTop}>
        <HandPayCircleOutline fontSize={40} color="#00b578" />
        <span>家人们我害怕系统</span>
      </div>
      <div>
        <Grid columns={3} gap={0}>
          {Box}
        </Grid>
      </div>
      <Button color="success" onClick={change}>
        我试试功能
      </Button>
      <Bottom />
    </div>
  );
};

export default Home;
