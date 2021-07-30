/*  eslint-disable import/no-cycle */
import { useMemo } from 'react';
import {
    applyMiddleware,
    combineReducers,
    createStore,
    bindActionCreators,
    Action,
} from 'redux';
import {
    useSelector as nativeUseSelector,
    useStore as naviveUseStore,
} from 'react-redux';
import logger from 'redux-logger';
import thunk, { ThunkAction } from 'redux-thunk';
import reducers, { RootReducer } from './helper';

type ReduxThunkFn<T, U = any> = (...args: U[]) => ThunkAction<T, RootReducer, null, Action<string>>;

type ReduxThunkFnReturnType<T> = {
    [P in keyof T]: T[P] extends ReduxThunkFn<infer U, infer S>
      ? (...args: S[]) => U
      : T[P];
  };

const store = createStore(
    combineReducers(reducers),
    process.env.NODE_ENV === 'development' ? applyMiddleware(thunk, logger) : applyMiddleware(thunk),
);

// 数据变化，不触发函数组件更新
export const useStore = () => naviveUseStore<RootReducer>().getState();

export const useSelector = <T>(fn: (state: RootReducer) => T) => fn(nativeUseSelector((a: RootReducer) => a));

export const useActions = <T extends { [key: string]: ReduxThunkFn<any>}> (actions: T) => {
    const { dispatch } = store;
    return useMemo(() => bindActionCreators<any, ReduxThunkFnReturnType<T>>(actions, dispatch as any), [dispatch, actions]);
};

export default store;
