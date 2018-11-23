import Users from '../../data/users';

export default {
    namespaced: true,
    state: {
        page: 0,
        per_page: 0,
        total: 0,
        total_pages: 0,
        list: []
    },
    mutations: {
        updateList(state, data){
            state.list = data;
        }
    },
    actions: {
        update({commit}, data){
            commit('updateList', Users);
        }
    },
    getters: {
        list: (state) => {
            return state.list;
        }
    }
};
