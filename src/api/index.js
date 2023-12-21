import request from '@/utils/request';

export const addUser = function addUser(data) {
    return request({
        url: `/manager/user/addUser`,
        method: 'post',
        data,
    });
};

export const editUser = function editUser(data) {
    return request({
        url: `/manager/user/editUser`,
        method: 'post',
        data,
    });
};

export const getUserInfo = function getUserInfo(params) {
    return request({
        url: `/manager/user/getUserInfo`,
        method: 'get',
        params,
    });
};
