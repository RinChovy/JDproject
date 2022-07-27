import React, { useEffect, useState } from 'react';
import { formListOne, allMoney } from '../../../atoms/index';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  Form,
  Selector,
  Button,
  DatePicker,
  TextArea,
  Stepper,
  Switch,
} from 'antd-mobile';
import style from '../index.module.less';
import dayjs from 'dayjs';

const SelectModel = () => {
  const [formList, setFormList] = useRecoilState(formListOne);
  const money = useRecoilValue(allMoney);
  useEffect(() => {
    console.log(style);
  }, []);
  const onFinish = (e, extend) => {
    console.log('我已经完成');
  };

  const changeMoney = (e, extend, type) => {
    //浅拷贝！！！！
    const list = JSON.parse(JSON.stringify(formList));
    if (type === 'action1') {
      list.action1 = extend.items[0].money;
      setFormList(list);
    } else if (type === 'action2') {
      const arr = [];
      extend.items.forEach((v, k) => {
        arr.push(v.money);
      });
      list.action2 = arr;
      setFormList(list);
    } else if (type === 'action4') {
      list.action4 = e;
      setFormList(list);
    }
  };
  return (
    <>
      <div>
        <Form
          name="form"
          onFinish={onFinish}
          footer={
            <Button block type="submit" color="primary" size="large">
              {'下一步 ￥' + money}
            </Button>
          }
        >
          <Form.Item name="action1" label="套餐内标准(单选)">
            <Selector
              columns={2}
              value={formList.action1}
              onChange={(e, extend) => changeMoney(e, extend, 'action1')}
              options={[
                { label: '标准1   ￥1000', value: '1', money: '1000' },
                { label: '标准2   ￥2000', value: '2', money: '2000' },
                { label: '标准3   ￥3000', value: '3', money: '3000' },
              ]}
            />
          </Form.Item>
          <Form.Item name="action2" label="套餐内玩法(多选)">
            <Selector
              columns={2}
              multiple
              onChange={(e, extend) => changeMoney(e, extend, 'action2')}
              options={[
                { label: '排山倒海￥110', value: '1', money: '110' },
                { label: 'XXXX￥200', value: '2', money: '200' },
                { label: 'XXXX￥100', value: '3', money: '100' },
                { label: 'XXXX￥800', value: '4', money: '800' },
                { label: 'XXXX￥420', value: '5', money: '420' },
              ]}
            />
          </Form.Item>
          <Form.Item
            name="action3"
            label="业务日期"
            trigger="onConfirm"
            onClick={(e, datePickerRef) => {
              datePickerRef.current?.open();
            }}
          >
            <DatePicker>
              {(value) =>
                value ? dayjs(value).format('YYYY-MM-DD') : '请选择日期'
              }
            </DatePicker>
          </Form.Item>
          <Form.Item
            name="action4"
            label="是否XXX"
            childElementPosition="right"
          >
            <Switch />
          </Form.Item>
          <Form.Item
            name="amount"
            label="所需额外物品数量--单价$50"
            childElementPosition="right"
          >
            <Stepper
              onChange={(value) => changeMoney(value, '[]', 'action4')}
            />
          </Form.Item>
          <Form.Item name="address" label="备注" help="您的需求">
            <TextArea
              placeholder="请输入备注"
              maxLength={100}
              rows={2}
              showCount
            />
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default SelectModel;
