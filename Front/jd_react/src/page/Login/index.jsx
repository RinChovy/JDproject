import React, { useEffect, useState } from 'react';
import { Button, Picker, Form, Input } from 'antd-mobile';
import { HandPayCircleOutline } from 'antd-mobile-icons';
import { useNavigate } from 'react-router-dom';
import './private.less';

const Login = () => {
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const [selectValue, setSelectValue] = useState(['我他吗什么身份']);
  const [visible, setVisible] = useState(false);
  const [jsonDate, setJsonDate] = useState([
    [
      { label: '金儿系统', value: '金儿身份' },
      { label: '多儿系统', value: '多儿身份' },
      { label: '我他吗什么身份', value: '我他吗什么身份' },
    ],
  ]);

  // 提交方法
  const handleSubmit = () => {
    navigate('/home');
  };

  return (
    <div>
      <div className="divTop">
        <HandPayCircleOutline fontSize={40} color="#00b578" />
        <span>家人们我害怕系统</span>
      </div>
      <Form className="form" onFinish={handleSubmit}>
        <div className="divMiddle">
          <Form.Item name="name" label="用户名" rules={[{ required: true }]}>
            <Input placeholder="请输入用户名" />
          </Form.Item>
          <Form.Item name="password" label="密码" rules={[{ required: true }]}>
            <Input placeholder="请输入密码" />
          </Form.Item>

          <Form.Item
            name="select"
            label="身份"
            onClick={() => {
              setVisible(true);
            }}
          >
            <Input
              name="select"
              value={selectValue}
              placeholder="请选择身份"
              readOnly
            />
            <Picker
              columns={jsonDate}
              visible={visible}
              onClose={() => {
                setVisible(false);
              }}
              value={selectValue}
              onConfirm={(v) => {
                setSelectValue(v);
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
};

export default Login;
