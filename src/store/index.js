import { defineStore } from 'pinia'

export const useLoginStore = defineStore('login', {
  state: () => {
    return {
      loginInfo: {},
    };
  },
  actions: {
    getLoginInfo() {
      return JSON.parse(localStorage.getItem('LOGININFO'));
    },
    setLoginInfo(params) {
      localStorage.setItem('LOGININFO', JSON.stringify(params));
      this.loginInfo = params;
    },
    getDirectManagementBdPower() {
      return (this.loginInfo).agentRole && ['1', '2', '3'].includes((this.loginInfo).agentRole );
    },
    
  },
});