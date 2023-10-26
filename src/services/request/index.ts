import { toRefs } from 'vue';
import axios from 'axios';
import { useStore } from '@/stores/user';
import { BASE_API } from '@/config';
import errorFunc from './error';
import responesFunc from './respones';

const store = useStore();
const { token } = toRefs(store);

const globalAxios = axios.create();
globalAxios.interceptors.response.use(responesFunc, errorFunc);

const request = async ({
  url = '',
  params = {},
  data = {},
  method = 'get',
  headers = {},
  baseURL = BASE_API,
  hasToken = true,
  responseType = 'json',
  needIntercept = true,
  autoTip = true,
  timeout = 20000,
  fileName = '',
  onUploadProgress = () => {},
}) => {
  if (hasToken && token.value) {
    headers = Object.assign({ authorization: token.value }, headers);
  }

  const options: any = {
    method,
    url,
    baseURL,
    data,
    params,
    autoTip,
    headers,
    responseType,
    timeout,
    fileName,
    onUploadProgress,
  };

  const res = needIntercept ? globalAxios(options) : axios(options);

  return res;
};

export { request };

export default request;
