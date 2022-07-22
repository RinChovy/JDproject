import React from 'react';
import { Button, Space } from 'antd-mobile';
import style from './private.less';

class Login extends React.Component {
  state = {
    list: [],
  };

  componentDidMount() {}

  render() {
    return (
      <div>
        <div className={style.divTop}>123</div>
        <p>家人们我害怕</p>
        <Space wrap>
          <Button color="primary" fill="solid">
            Solid
          </Button>
          <Button color="primary" fill="solid">
            Solid
          </Button>
        </Space>
      </div>
    );
  }
}

export default Login;
