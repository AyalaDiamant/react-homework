export const UserService = (() => {
    let user;
    return {
        setUser(_user) {
            user = _user;
        },
        getUser() {
            return user;
        }
    }
})()