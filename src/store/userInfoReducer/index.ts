import { createAction, handleActions } from 'redux-actions';
import { Dispatch } from 'redux';

export interface IUserInfo {
    token: string,
    accountId: string,
}

export interface IUserInfoReducer {
    userInfo: IUserInfo,
    mobile?: string,
}
const initialState: IUserInfoReducer = {
    userInfo: (() => ({
        token: '123',
        accountId: '456',
    }))(),
    mobile: '123456789012',
};

const setUserInfoAction = createAction('userInfoReducer 设置用户信息');
const setMobileAction = createAction('userInfoReducer 设置mobile信息');

export const actions = {
    setUserInfoAction: (userInfo: IUserInfo) => (dispatch: Dispatch) => {
        dispatch(setUserInfoAction(userInfo));
    },
    setMobileAction: (mobile: string) => (dispatch: Dispatch) => {
        dispatch(setMobileAction(mobile));
    },
};

export default handleActions<IUserInfoReducer, any>({
    [setUserInfoAction.toString()]: (state, { payload: userInfo }) => ({
        ...state,
        userInfo,
    }),
    [setMobileAction.toString()]: (state, { payload }) => ({
        ...state,
        mobile: payload,
    }),
}, initialState);
