export const SELECT_TAB = 'SELECT_TAB';
export const changeTab = tab => ({
    type: SELECT_TAB,
    tab
})

export const DERENDER = 'DERENDER';
export const derender = () => ({
    type: DERENDER
})

export const AUTO_LOGIN = 'AUTO_LOGIN';
export const autoLogin = () => ({
    type: AUTO_LOGIN
})