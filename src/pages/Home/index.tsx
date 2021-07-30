import React from 'react';
import { useStore } from '@/store';
import Child from './components/Child';

const Home = () => {
    const data = useStore();
    console.log(data.userInfoReducer.userInfo.accountId);
    return (
        <div>
            Home页面 -
            {' '}
            {data.userInfoReducer.userInfo.accountId}
            <div>
                <Child />
            </div>
        </div>
    );
};

export default Home;
