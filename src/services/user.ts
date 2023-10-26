import { UserApi } from '@/enums/apis/user';
import request from './request';

export function getUserInfo() {
  return request({
    url: UserApi.GET_USER_INFO,
  });
}
