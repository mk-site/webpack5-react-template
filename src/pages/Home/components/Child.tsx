import React from 'react';
import { useSelector } from '@/store';
import { useUserInfoActions } from '@/store/helper';

const Home = () => {
    const { userInfo, mobile } = useSelector((r) => r.userInfoReducer);
    const obj = useUserInfoActions();
    const clickChild = () => {
        obj.setMobileAction('123');
    };
    return (
        <div>
            <div onClick={clickChild}>Child 组件 -</div>
            {' '}
            {userInfo.accountId}
            手机号：
            {mobile}
        </div>
    );
};

export default Home;
