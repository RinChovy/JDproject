import { atom, selector } from 'recoil';

export const nameTokenState = atom({
  key: 'nameTokenState',
  default: '',
});

export const homeList = atom({
  key: 'homeList',
  default: [
    { name: '金儿查询', code: '001' },
    { name: '金儿另类查询', code: '002' },
    { name: '金儿系内查询', code: '003' },
  ],
});

export const activeKey = atom({
  key: 'activeKey',
  default: '1',
});
//form表单金额集合
export const formListOne = atom({
  key: 'formListOne',
  default: { action1: '0', action2: [], action4: '0' },
});
//总金额计算
export const allMoney = selector({
  key: 'allMoney',
  get: ({ get }) => {
    let text = 0;
    text += Number(get(formListOne).action1);
    get(formListOne).action2.forEach((v, k) => {
      text += Number(v);
    });
    text += Number(get(formListOne).action4) * 50;
    return text;
  },
});
