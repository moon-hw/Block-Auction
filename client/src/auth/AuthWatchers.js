export const loginFuctions = {
    onSuccess: (user) => {
        const userInfoStr = JSON.stringify(user);

        localStorage.setItem("userInfo", userInfoStr);
        console.log(`login success`);
    },
    onLogout: () => localStorage.clear(),
    getUserInfo: () => JSON.parse(localStorage.getItem("userInfo")),
};