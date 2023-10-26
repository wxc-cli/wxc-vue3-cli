import { warning } from '@/utils/tips';

const errStatus: { [key: string]: string } = {
  400: '错误请求',
  401: '未授权，请重新登录',
  403: '拒绝访问',
  404: '请求错误,未找到该资源',
  405: '请求方法未允许',
  408: '请求超时',
  500: '程序开小差了，请联系管理员处理问题！',
  501: '网络未实现',
  502: '网络错误',
  503: '服务不可用',
  504: '网络超时',
  505: 'http版本不支持该请求',
};

// 错误计数器
let hasErrMsg = false;

const tips = (msg: string) => {
  if (hasErrMsg) {
    return;
  }
  hasErrMsg = true;

  warning(msg, () => {
    hasErrMsg = false;
  });
};

export default function (err: any) {
  // 因请求重复而取消的请求
  if (err.__CANCEL__) {
    return { cancelReuest: true };
  }

  let msg = '';
  let status = '';
  const { response } = err;

  if (err.message.indexOf('timeout of') !== -1 || err.message.indexOf('Network Error') !== -1) {
    msg = '网络延迟,请稍后再试';
    status = '000';
  } else if (response) {
    status = response.data?.code || response.status;
    msg = response.data?.msg || errStatus[status];
  } else {
    msg = '系统错误,请稍后再试';
    status = '000';
  }
  tips(msg);

  return {
    data: {
      status,
      message: msg,
    },
    state: false,
  };
}
