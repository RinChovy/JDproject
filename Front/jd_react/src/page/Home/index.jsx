import React from 'react';
import { Button, Space } from 'antd-mobile';

class Home extends React.Component {
  state = {
    list: [],
  };

  componentDidMount() {}

  render() {
    return (
      <div>
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

export default Home;
