import axios from "axios";
import Vue from "vue";
import { showFailToast } from 'vant';
import { host } from "@/global-config";
import store from "../store";

// create an axios instance
const service = axios.create({
  baseURL: host, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  // timeout: 5000, // request timeout
  headers: {
    // 'Content-Type': 'application/x-www-form-urlencoded'
  },
});

// request interceptor
service.interceptors.request.use(
  (config) => {
    // config.headers.token = "sv3jigc9eft3s2tksca6kth6iqq1haih30";
    // 添加token进header
    if (store.getters.getLoginInfo) {
      config.headers.token = store.getters.getLoginInfo.token;
    }

    if (config.isLoading) {
      Vue.prototype.$toast.loading({
        duration: 30000,
        loadingType: "spinner",
        forbidClick: true,
      });
    }
    return config;
  },
  (error) => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  },
);

// response interceptor
service.interceptors.response.use(
  (response) => {
    const { code, data } = response.data;

    if (response.config.isLoading) {
      Vue.prototype.$toast.clear(true);
    }

    if (![0, "0"].includes(code)) {
      showFailToast({
        message: response.data.msg,
        position: 'top',
      });
      return Promise.reject(response.data);
    }
    return data;
  },
  (error) => {
    showFailToast({
      message: '网络异常，请重新尝试！',
      position: 'top',
    });
    return Promise.reject(error);
  },
);

export default service;
