import { Storage } from '@/enums/storage';
import { StoreKeys } from '@/enums/store';
import { defineStore } from 'pinia';

interface Store {
  token: string | null;
  userInfo: {
    id: string | null;
    username: string | null;
  } | null;
}

export const useStore = defineStore(StoreKeys.USER, {
  state: () => {
    const store: Store = {
      token: null,
      userInfo: null,
    };
    return store;
  },
  getters: {
    isLogined(state) {
      return !!state.token;
    },
  },
  actions: {
    /**
     * 判断本地是否存着token
     */
    checkLocalToken() {
      const token = localStorage.getItem(Storage.TOKEN);
      if (token) {
        this.setUserInfo();
      }
    },
    /**
     * 用户退出登录
     */
    removeUser() {
      this.token = null;
      this.userInfo = null;
      // 清除local的token
      localStorage.removeItem(Storage.TOKEN);
    },
    /**
     * 设置token
     * @param token
     */
    setToken(token: string) {
      this.token = token;
      // 存入本地
      localStorage.setStorage(Storage.TOKEN, token);
    },
    /**
     * 通过token获取设置用户信息
     */
    async setUserInfo() {
      // TODO:获取
    },
  },
});
