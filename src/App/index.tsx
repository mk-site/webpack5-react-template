/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Suspense, useEffect } from 'react';
import {
    HashRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import { TRouterItem } from '@/router/helper';
import store from '@/store';
import useRoute from './useRoute';

const generateRoute = (menu: TRouterItem): any => {
    // 存在子路由
    if (menu.children) {
        return menu.children.map((item) => generateRoute(item));
    }
    const exact = Object.prototype.hasOwnProperty.call(menu, 'exact') ? menu.exact : true;
    const Com = menu.component;
    if (!Com) {
        return null;
    }
    return (
        <Route
            key={menu.path}
            path={menu.path}
            exact={exact}
        >
            <Com />
        </Route>
    );
};

const App = () => {
    const { visible, routes } = useRoute();
    if (!visible || !routes.length) {
        // 白屏loading
        return null;
    }
    console.log('App 渲染...');
    return (
        <Router>
            <Suspense fallback={<div>loading...</div>}>
                <Switch>
                    {
                        routes.map((item) => generateRoute(item))
                    }
                    <Redirect exact from="/" to={routes[0].component} />
                </Switch>
            </Suspense>
        </Router>
    );
};

export default () => (
    <ConfigProvider locale={zhCN}>
        <Provider store={store}>
            <App />
        </Provider>
    </ConfigProvider>
);
