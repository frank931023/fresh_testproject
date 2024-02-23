export default {
    setUsers(state, users) {
        state.users = users;
    },
    addUser(state, user) {
        state.users.push(user);
    },
    updateUser(state, user) {
        const userIndex = state.users.findIndex((usr) => usr.id === user.id);
        state.users[userIndex] = user;
    },
    deleteUser(state, userId) {
        state.users = state.users.filter((usr) => usr.id !== userId);
    },
    addWantedItem(state, payload) {
        const user = state.users.find((usr) => usr.id === payload.userId);
        user.wantedItems.push(payload.productId);
    }
}