import xFetch from './xFetch';
import { stringify } from 'qs';
import { api } from './api';

// 测试接口
export async function userIssues(params) {
  return xFetch(api.userIssues, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      regionCode: '120000',
    },
    data: stringify(params),
  });
}
// 无效接口
export async function userIssues2(params) {
  return xFetch(api.userIssues2, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      regionCode: '120000',
    },
    data: stringify(params),
  });
}
