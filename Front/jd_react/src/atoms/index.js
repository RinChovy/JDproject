import { atom } from 'recoil';

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
