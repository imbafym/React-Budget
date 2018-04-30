import { notification, Icon, message } from 'antd';
import React from 'react';

export const SHOW_DATA = 'show_data';
export const LOGIN_SUCCESS = 'login_success';
export const LOGOUT_SUCCESS = 'logout_success';

export function show_data(data) {
    return {
        type: SHOW_DATA,
        payload: data
    }
}

export const triggerLogin = (userName, password) => {
    // notification.open({
    //     message: 'Login Successfully!',
    //     description: 'Enjoy the trial of this online notes',
    //     icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />
    //   })
    return {
        type: LOGIN_SUCCESS,
        payload: { userName, password }
    }
};