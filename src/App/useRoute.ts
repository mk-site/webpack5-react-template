import { useEffect, useState } from 'react';
import routeObj from '@/router';
import { TRouterItem } from '@/router/helper';

type TMenuObj = {
    visible: boolean,
    routes: TRouterItem[]
}

// 处理路由
export default function useRoute() {
    const [menuObj, setMenuObj] = useState<TMenuObj>({
        visible: false,
        routes: [],
    });

    useEffect(() => {
        const array: TRouterItem[] = [];
        const keys = Object.keys(routeObj);
        keys.forEach((element) => {
            array.push(routeObj[element]);
        });
        setMenuObj({
            visible: true,
            routes: array,
        });
    }, []);

    return menuObj;
}
