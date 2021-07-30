export type TRouterItem = {
    path: string,
    exact?: boolean,
    component?: any,
    children?: TRouterItem[]
}
export type TRouter = {
    [key: string]: TRouterItem
}
