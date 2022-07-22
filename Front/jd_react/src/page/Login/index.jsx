import React from 'react';
import { Button, Picker, Grid, Form, Input } from 'antd-mobile';
import { HandPayCircleOutline } from 'antd-mobile-icons';
import './private.less';

class Login extends React.Component {
  state = {
    list: [],
    selectValue: '',
    visible: false,
    jsonDate: [
      [
        { label: '金儿系统', value: '金儿身份' },
        { label: '多儿系统', value: '多儿身份' },
        { label: '我他吗什么身份', value: '我他吗什么身份' },
      ],
    ],
  };

  componentDidMount() {}

  // 提交方法
  handleSubmit = () => {
    alert('家人们提交方法我还没写');
  };
  render() {
    const { visible, jsonDate, selectValue } = this.state;
    return (
      <div>
        <div className="divTop">
          <HandPayCircleOutline fontSize={40} color="#00b578" />
          <span>家人们我害怕系统</span>
        </div>
        <Form className="form" onFinish={this.handleSubmit}>
          <div className="divMiddle">
            <Form.Item name="name" label="用户名" rules={[{ required: true }]}>
              <Input placeholder="请输入用户名" />
            </Form.Item>
            <Form.Item
              name="password"
              label="密码"
              rules={[{ required: true }]}
            >
              <Input placeholder="请输入密码" />
            </Form.Item>

            <Form.Item
              name="select"
              label="身份"
              rules={[{ required: true }]}
              onClick={() => {
                this.setState({
                  visible: true,
                });
              }}
            >
              <Input value={selectValue} placeholder="请选择身份" readOnly />
              <Picker
                columns={jsonDate}
                visible={visible}
                onClose={() => {
                  this.setState({
                    visible: false,
                  });
                }}
                value={selectValue}
                onConfirm={(v) => {
                  this.setState({
                    selectValue: v,
                  });
                }}
              />
            </Form.Item>
          </div>
          <div className="divBottom">
            <Button
              block
              size="large"
              color="success"
              style={{ width: '90%' }}
              type="submit"
            >
              登录
            </Button>
          </div>
        </Form>
        <div className="divBottom">
          <p>测试版本0.1</p>
        </div>
      </div>
    );
  }
}

export default Login;
