
/**
 * 存储登录的用户信息
 * todo: 本地存储登录信息(只存token还是用户信息也保存)
 */

const uerInitState = {
    isLogined: false,   /* 是否已登陆 */
    onLogining: false,
    accesstoken: '',
    avatar_url: '',
    id: '',
    loginname: '',
    success: false
};

const User = (state = uerInitState, action) => {

    switch (action.type) {

        case 'login/BEGIN_LOGIN':
            return  {...state, onLogining: true};

        /* 登录成功, 数据处理在loginAction中已经处理了 */
        case 'login/LOGIN_SUCCESS':
            return action.userdata;

        /* 登录失败 */
        case 'login/LOGIN_FAIL':
            return {...state, onLogining: false};

        /* 登出 */
        case 'logout/LOGOUT':
            return uerInitState;
        default:
            return state;
    }
};


export default User;