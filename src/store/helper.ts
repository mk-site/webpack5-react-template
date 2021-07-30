/*  eslint-disable import/no-cycle */
// 帮助类action 及类型
import { useActions } from '.';
import userInfoReducer, { IUserInfoReducer, actions as userInfoActions } from './userInfoReducer';

export interface RootReducer {
    userInfoReducer: IUserInfoReducer,
}

export default {
    userInfoReducer,
};

export const useUserInfoActions = () => useActions(userInfoActions);
