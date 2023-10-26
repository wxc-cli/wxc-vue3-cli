import { ElMessage } from 'element-plus';

export const warning = (msg = '请求错误', cb: () => void) => {
  ElMessage({
    showClose: true,
    message: msg,
    type: 'warning',
    duration: 2000,
    onClose: () => {
      typeof cb === 'function' && cb();
    },
  });
};
export const error = (msg = '请求错误', cb: () => void) => {
  ElMessage({
    showClose: true,
    message: msg,
    type: 'warning',
    duration: 2000,
    onClose: () => {
      typeof cb === 'function' && cb();
    },
  });
};
export const success = (msg = '操作成功', cb: () => void) => {
  ElMessage({
    showClose: true,
    message: msg,
    type: 'success',
    duration: 2000,
    onClose: () => {
      typeof cb === 'function' && cb();
    },
  });
};
