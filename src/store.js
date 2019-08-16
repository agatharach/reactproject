import createStore from "unistore";

export const store = createStore({
    is_login: false,
    user_name: "",
    email: "",
    quoteUrl: "https://warm-mesa-82751.herokuapp.com/api/quotes",
    quotes: ""
});

export const actions = store => ({
    login(state) {
        return { is_login: true };
    },

    logout(state) {
        return { is_login: false };
    },
    setUser(state, nama) {
        return { user_name: nama };
    },
    setEmail(state, email) {
        return { email: email };
    },
    setQuote(state, quotes) {
        return { quotes: quotes };
    }
});
