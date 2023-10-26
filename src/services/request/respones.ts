import { warning } from '@/utils/tips';
import { useStore } from '@/stores/user';

const store = useStore();

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

export default async function (result: any) {
  const { data, headers = {}, config } = result;
  const contentType = headers['content-type'];
  // 当为文件流时直接返回文件流而不直接下载,为将来可能的文件流解析方案留下空间
  if (contentType === 'application/octet-stream') {
    console.log('result.data :', result.data);
    data && download(data, config.fileName, contentType);
    return result;
  }
  const { code, msg, succeed, data: resData } = data || {};

  const state = succeed;

  if (!state) {
    if (msg) {
      resData && (resData.msg = msg);
      if (config.autoTip) {
        tips(msg);
      }

      // 如果权限不足，说明token已过期，返回登录页，并清除token
      if (code === 10104) {
        store.removeUser();
      }
    }
  }

  return { data: resData, state };
}

// 下载文件
function download(res: any, fileName: string, contentType: any) {
  const elink = document.createElement('a');

  // 获取文件名fileName
  // var fileName = decodeURI(disposition.substring(disposition.indexOf('filename=') + 9, disposition.length))

  elink.download = fileName;
  elink.style.display = 'none';
  const blob = new Blob([res], { type: contentType });
  elink.href = window.URL.createObjectURL(blob);
  document.body.appendChild(elink);
  elink.click();
  document.body.removeChild(elink);
}
