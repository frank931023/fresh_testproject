export default {
    userWantedItems(state) {
        return (userId) => {
            const user = state.users.find((user) => user.id === userId);
            return user ? user.wantedItems : [];
        };
    },
    userWantedItemsQuantity(state) {
        return (userId) => {
            const user = state.users.find((user) => user.id === userId);
            return user ? user.wantedItemsQuantity : [];
        };
    },
    user(state) {
        return (userId) => {
            return state.users.find((user) => user.id === userId);
        };
    },
}