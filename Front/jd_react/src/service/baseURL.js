/**
 * baseURL 映射
 */

let baseURL = '';

if (process.env.NODE_ENV === 'development') {
  baseURL = 'https://debug.epayservice.cn/webpay_new';
} else {
  baseURL = 'https://debug.epayservice.cn/webpay_new';
}

export default baseURL;
